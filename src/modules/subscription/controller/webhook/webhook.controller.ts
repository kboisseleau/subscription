import { Controller, Headers, Post, Req, RawBodyRequest } from '@nestjs/common'
import { StripeService } from '../../services/stripe/stripe.service'
import { UserService } from 'src/modules/user/services/user/user.service'
// @UseInterceptors(WebHookInterceptor)
@Controller('webhook')
export class WebhookController {
  constructor (
    private readonly _stripeService: StripeService,
    private readonly _userService: UserService
  ) {}
     
  @Post()
  async handleIncomingEvents (
        @Headers('stripe-signature') signature: string,
        @Req() request: RawBodyRequest<Request>
  ): Promise<void> {
    const { customerId, subscriptionStatus } = await this._stripeService.handleIncomingEvents(signature, request.rawBody)
   
    await this._userService.updateMonthlySubscriptionStatus(customerId, subscriptionStatus)
  }
}
