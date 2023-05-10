import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from '../../guard/local-auth.guard'
import { AuthentificationService } from '../../services/authentification/authentification.service'
import { JwtAuthGuard } from '../../guard/jwt-auth.guard'
import { User } from '../../../../../db/entities/User'
@Controller('authentification')
export class AuthentificationController {
  constructor (private _authService: AuthentificationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login (@Request() req: any): Promise<{accessToken: string}> {
    return this._authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile (@Request() req: any): User {
    return req.user
  }
}
