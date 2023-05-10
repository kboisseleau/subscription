import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from '../../services/user/user.service'
import { User } from '../../../../../db/entities/User'
import { RegistrationDTO } from '../../dto/registration.dto'

@Controller('user')
export class UserController {
  constructor (private _userService: UserService) {}

  @Post('signup')
  signUp (@Body() body: RegistrationDTO): Promise<User> {
    console.log(body)
    return this._userService.signUp(body)
  }
}
