import { Test, TestingModule } from '@nestjs/testing'
import { when } from 'jest-when'
import { StripeService } from '../../../../../src/modules/subscription/services/stripe/stripe.service'
import { ConfigService } from '@nestjs/config'
import { BadRequestException } from '@nestjs/common'
import { StripeMock } from '../../../mock/stripe.mock'

describe('StripeService', () => {
  let service: StripeService

  const mockConfigService = {
    get: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StripeService,
        ConfigService
      ]
    }).compile()
    when(mockConfigService.get as jest.Mock).calledWith('STRIPE_SECRET_KEY').mockReturnValue('g4fd4gd654g68d4g76d87g')
    when(mockConfigService.get as jest.Mock).calledWith('STRIPE_WEBHOOK_SECRET').mockReturnValue('g4fd4gd654g68d4g76d87g')
    service = module.get<StripeService>(StripeService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('#handleIncomingEvents return error if not signature ', async () => {
    try {
      await service.handleIncomingEvents(null, null)
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException)
    }
  })
})
