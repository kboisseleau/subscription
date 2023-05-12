import { BadRequestException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import Stripe from 'stripe'
import { FactoryStripeEvent } from '../../class/factory/factory-stripe-event'

@Injectable()
export class StripeService {
  private _stripe: Stripe
 
  constructor (
    private _configService: ConfigService
  ) {
    this._stripe = new Stripe(_configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2022-11-15'
    })
  }
     
  private async _constructEventFromPayload (signature: string, payload: Buffer): Promise<Stripe.Event> {
    const webhookSecret = this._configService.get('STRIPE_WEBHOOK_SECRET')

    return this._stripe.webhooks.constructEvent(
      payload?.toString(),
      signature?.toString(),
      webhookSecret
    )
  }

  public async handleIncomingEvents (signature: string, rawBody: Buffer): Promise<{customerId: string, subscriptionStatus: string }> {
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header')
    }
    
    const event = await this._constructEventFromPayload(signature, rawBody)
    const ret = await FactoryStripeEvent.switchEvent(event)

    return ret
  }
 
}
