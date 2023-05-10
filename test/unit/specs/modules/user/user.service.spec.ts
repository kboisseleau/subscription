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

  it('signUp should return a registered user', () => {
    expect(service).toBeDefined()
  })

})
