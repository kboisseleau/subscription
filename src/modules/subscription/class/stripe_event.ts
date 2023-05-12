import Stripe from 'stripe'

export class StripeEvent {
  static async subscriptionCreated (data: Stripe.Subscription): Promise<{customerId: string, subscriptionStatus: string }> {
    const customerId: string = data.customer as string
    const subscriptionStatus = data.status

    return { customerId, subscriptionStatus }
  }
}