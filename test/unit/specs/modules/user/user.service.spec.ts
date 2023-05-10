import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from '../../../../../src/modules/user/services/user/user.service'
import { plainToInstance } from 'class-transformer'
import { RegistrationDTO } from '../../../../../src/modules/user/dto/registration.dto'
import { validateSync } from 'class-validator'
import { Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm'
import { User } from '../../../../../db/entities/User'
import { UserRepositoryService } from '../../../../../src/modules/user/repository/user.repository/user.repository.service'
import { UserMock, RepositoryrMock } from '../../../mock/mock.module'

describe('UserService', () => {
  let service: UserService
  let userRepository: Repository<User>
  let userRepositoryService: UserRepositoryService
  
  afterEach(() => {
    jest.clearAllMocks()
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepositoryService,
          useValue: RepositoryrMock.mockUserRepository
        },
        {
          provide: getRepositoryToken(User),
          useValue: RepositoryrMock.mockRepo
        }
      ]
    }).compile()

    service = module.get<UserService>(UserService)
    userRepository = module.get<Repository<User>>(getRepositoryToken(User))
    userRepositoryService = module.get<UserRepositoryService>(UserRepositoryService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('signUp should be compliant with the DTO', () => {
    const registration = UserMock.userSignUp
    const validatedConfig = plainToInstance(RegistrationDTO, registration, { enableImplicitConversion: true })
    const errors = validateSync(validatedConfig)
    expect(errors.length).toBe(0)
  })

  it('signUp should return a registered user', async () => {
    const user = UserMock.userSignUp
    const resUser = UserMock.users[0]
    const save = RepositoryrMock.mockUserRepository.save
    
    save.mockResolvedValue(resUser)

    const res = await service.signUp(user)
    expect(res).toEqual(resUser)
    expect(save).toHaveBeenCalledTimes(1)
  })

  it('should be defined', async () => {
    const resUser = UserMock.users[1]
    const findOne = RepositoryrMock.mockUserRepository.findOne
    findOne.mockResolvedValue(resUser)
    const res = await service.findOne('john.doe@gmail.com')
    expect(res).toEqual(resUser)
    expect(findOne).toHaveBeenCalledTimes(1)
  })

})
