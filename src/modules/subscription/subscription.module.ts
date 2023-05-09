import { Module } from '@nestjs/common';
import { StripeModule } from './services/stripe/stripe.module';

@Module({
  imports: [StripeModule]
})
export class SubscriptionModule {}
