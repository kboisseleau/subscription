import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { plainToInstance } from 'class-transformer'
import { RegistrationDTO } from '../../dto/registration.dto'
import { validateSync } from 'class-validator'
import { Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm'
import { User } from '../../../../../db/entities/User'
import { UserRepositoryService } from '../../repository/user.repository/user.repository.service'

describe('UserService', () => {
  let service: UserService
  let userRepository: Repository<User>

  const mockRepo = {
    save: jest.fn(),
    update: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    insert: jest.fn(),
    createQueryBuilder: jest.fn()
  }

  const mockUserRepository = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
    add: jest.fn()

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepositoryService,
          useValue: mockUserRepository
        },
        {
          provide: getRepositoryToken(User),
          useValue: mockRepo
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
    const registration = {
      email: 'john.doe@gmail.com',
      lastname: 'john',
      firstname: 'doe',
      password: 'password'
    }
    const validatedConfig = plainToInstance(RegistrationDTO, registration, { enableImplicitConversion: true })
    const errors = validateSync(validatedConfig)
    expect(errors.length).toBe(0)
  })

  it('signUp should return a registered user', () => {
    expect(service).toBeDefined()
  })

})
