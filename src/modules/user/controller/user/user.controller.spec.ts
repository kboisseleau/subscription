import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from '../../services/user/user.service'
import { INestApplication } from '@nestjs/common'

describe('UserController', () => {
  let controller: UserController

  const mockUserService = {
    inscription: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ UserController ],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService
        }
      ]
    }).compile()

    controller = module.get<UserController>(UserController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
