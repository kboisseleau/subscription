import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '../../../../../db/entities/User'
import { UserService } from 'src/modules/user/services/user/user.service'

@Injectable()
export class AuthentificationService {

  constructor (
    private _userService: UserService,
    private _jwtService: JwtService
  ) {}
    
  public async validateUser (email: string, pass: string): Promise<any> {
    const utilisateur = await this._userService.findOneEmail(email)

    if (utilisateur && utilisateur.password === pass) {
      const { password, ...result } = utilisateur
      return result
    }
  }
    
  public async login (utilisateur: User): Promise<{accessToken: string}> {
    const payload = { email: utilisateur.email, sub: utilisateur.id }
    return {
      accessToken: this._jwtService.sign(payload)
    }
  }
}
