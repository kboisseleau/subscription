import { Module } from '@nestjs/common'
import { WebhookController } from './controller/webhook/webhook.controller'
import { StripeService } from './services/stripe/stripe.service'
import { UserModule } from '../user/user.module'

@Module({
  imports: [ UserModule ],
  controllers: [ WebhookController ],
  providers: [ StripeService ]
})
export class SubscriptionModule {}
