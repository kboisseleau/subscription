export class RepositoryrMock {
  static readonly mockRepo = {
    save: jest.fn(),
    update: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    insert: jest.fn(),
    createQueryBuilder: jest.fn()
  }

  static readonly mockUserRepository = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
    save: jest.fn()

  }
}