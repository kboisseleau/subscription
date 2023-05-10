import { Module } from '@nestjs/common'
import { UserController } from './controller/user/user.controller'
import { UserService } from './services/user/user.service'
import { UserRepositoryService } from './repository/user.repository/user.repository.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'db/entities/User'

@Module({
  imports: [ TypeOrmModule.forFeature([ User ]) ],
  controllers: [ UserController ],
  providers: [ UserService, UserRepositoryService ],
  exports: [
    UserService
  ]
})
export class UserModule {}
