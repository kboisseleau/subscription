export class UserMock {
  static readonly users = [
    {
      id: 1,
      email:'boisseleau.kevin@gmail.com',
      firstname: 'john',
      lastname: '',
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

  static readonly userSignUp = {
    email: 'john.doe@gmail.com',
    lastname: 'john',
    firstname: 'doe',
    password: 'password'
  }
}
