import { Test, TestingModule } from '@nestjs/testing'
import { AuthentificationService } from './authentification.service'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../../../user/services/user/user.service'
describe('AuthentificationService', () => {
  let service: AuthentificationService
  const mockUserService = {
    inscription: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthentificationService,
        {
          provide: UserService,
          useValue: mockUserService
        },
        JwtService
      ]
    }).compile()

    service = module.get<AuthentificationService>(AuthentificationService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
