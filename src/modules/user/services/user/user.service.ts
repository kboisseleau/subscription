import { Injectable } from '@nestjs/common'
import { User } from 'db/entities/User'
import { UserRepositoryService } from '../../repository/user.repository/user.repository.service'

@Injectable()
export class UserService {
  private readonly _user = [
    {
      id: 1,
      email:'boisseleau.kevin@gmail.com',
      firstname: 'john',
      lastname: '',
      password: 'test'
    },
    {
      id: 2,
      email:'',
      firstname: 'maria',
      lastname: '',
      password: 'guess'
    }
  ]
        
  constructor (private _userRepositoryService: UserRepositoryService) {}
    
  public async findOne (email: string): Promise<User | undefined> {
    return this._user.find(user => user.email === email)
  }
    
  public async signUp (user: User): Promise<User> {
    return await this._userRepositoryService.add(user)
  }
}
