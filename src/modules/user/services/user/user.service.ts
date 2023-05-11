import { Injectable } from '@nestjs/common'
import { User } from 'db/entities/User'
import { UserRepositoryService } from '../../repository/user.repository/user.repository.service'

@Injectable()
export class UserService {
        
  constructor (private _userRepositoryService: UserRepositoryService) {}
    
  public async findOneEmail (email: string): Promise<User | undefined> {
    return await this._userRepositoryService.findOneEmail(email)
  }

  public async findOne (id: number): Promise<User | undefined> {
    return await this._userRepositoryService.findOne(id)
  }

  public async findAll (): Promise<User[] | undefined> {
    return await this._userRepositoryService.findAll()
  }
    
  public async signUp (user: Partial<User>): Promise<User> {
    return await this._userRepositoryService.save(user)
  }
}
