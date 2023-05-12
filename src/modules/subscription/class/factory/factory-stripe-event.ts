import Stripe from 'stripe'
import { EVENT_TYPE } from '../../typage/enum/event-type.enum'
import { StripeEvent } from '../stripe_event'

export class FactoryStripeEvent {
  static async switchEvent (event: Stripe.Event): Promise<{customerId: string, subscriptionStatus: string }> {

    const type = event.type
    const data = event.data.object as Stripe.Subscription
    let ret
    
    switch (type) {
      case EVENT_TYPE.cSubCreated: ret = StripeEvent.subscriptionCreated(data)
      case EVENT_TYPE.cSubUpdated: ret = StripeEvent.subscriptionCreated(data)
      default: console.warn(`Evenement ${type} non pris en charge`)      
    }

    if (!ret) {
      throw new Error(`Evenement ${type} non pris en charge`)
    }

    return ret         
  }
}