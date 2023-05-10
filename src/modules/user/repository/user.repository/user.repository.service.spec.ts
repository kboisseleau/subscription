import { Test, TestingModule } from '@nestjs/testing'
import { UserRepositoryService } from './user.repository.service'
import { User } from '../../../../../db/entities/User'
import { Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm'

describe('UserRepositoryService', () => {
  let service: UserRepositoryService
  let userRepository: Repository<User>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepositoryService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository
        }
      ]
    }).compile()

    service = module.get<UserRepositoryService>(UserRepositoryService)
    userRepository = module.get<Repository<User>>(getRepositoryToken(User))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
