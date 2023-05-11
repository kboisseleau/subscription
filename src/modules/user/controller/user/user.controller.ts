import { Body, Controller, Post, Get, Param } from '@nestjs/common'
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

  @Get('')
  findAll (): Promise<User[]> {
    return this._userService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: number): Promise<User> {
    return this._userService.findOne(id)
  }
}
