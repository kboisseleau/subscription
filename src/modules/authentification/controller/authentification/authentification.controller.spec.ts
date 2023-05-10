import { Test, TestingModule } from '@nestjs/testing'
import { AuthentificationController } from './authentification.controller'
import { AuthentificationService } from '../../services/authentification/authentification.service'

describe('AuthentificationController', () => {
  let controller: AuthentificationController
  const mockAuthService = {
    validateUser: jest.fn(),
    login: jest.fn()
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [
        AuthentificationController
      ],
      providers: [
        {
          provide: AuthentificationService,
          useValue: mockAuthService
        }
      ]
    }).compile()

    controller = module.get<AuthentificationController>(AuthentificationController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
