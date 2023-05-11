import { User } from 'db/entities/User'

export class UserMock {
  static readonly users: User[] = [
    {
      id: 1,
      email:'boisseleau.kevin@gmail.com',
      firstname: 'kevin',
      lastname: 'boisseleau',
      password: 'test'
    },
    {
      id: 2,
      email: 'john.doe@gmail.com',
      lastname: 'john',
      firstname: 'doe',
      password: 'password'
    }
  ]

  static readonly userSignUp: Partial<User> = {
    email: 'john.doe@gmail.com',
    lastname: 'john',
    firstname: 'doe',
    password: 'password'
  }
}
