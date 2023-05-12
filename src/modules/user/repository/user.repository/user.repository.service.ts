import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../../../../../db/entities/User'
import { Repository, UpdateResult } from 'typeorm'

@Injectable()
export class UserRepositoryService {
  constructor (
    @InjectRepository(User)
    private _usersRepository: Repository<User>
  ) {}

  findAll (): Promise<User[]> {
    return this._usersRepository.find()
  }

  findOne (id: number): Promise<User | null> {
    return this._usersRepository.findOneBy({ id })
  }

  findOneEmail (email: string): Promise<User | null> {
    return this._usersRepository.findOneBy({ email })
  }

  async remove (id: number): Promise<void> {
    await this._usersRepository.delete(id)
  }

  async save (data: Partial<User>): Promise<User> {    
    return await this._usersRepository.save(data)  
  }

  async update (stripeCustomerId: string, monthlySubscriptionStatus : {monthlySubscriptionStatus: string}): Promise<UpdateResult> {    
    return await this._usersRepository.update(stripeCustomerId, monthlySubscriptionStatus)
  }
}
