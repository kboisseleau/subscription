import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvModule } from './modules/config/env/env.module'
import { DatabaseModule } from './modules/config/database/database.module'
import { UserModule } from './modules/user/user.module'
import { SubscriptionModule } from './modules/subscription/subscription.module'

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    UserModule,
    SubscriptionModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ]
})
export class AppModule {}
