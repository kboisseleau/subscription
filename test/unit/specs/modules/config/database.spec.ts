import type { ConfigService } from '@nestjs/config'
import { when } from 'jest-when'
import { pgModuleFactory } from 'src/modules/config/database/class/dataSourceOptions'
import { DataSourceOptions } from 'typeorm'

describe('Database Helper', () => {
  const configServiceMock: Partial<ConfigService> = { getOrThrow: jest.fn() }
  const host = 'localhost'
  const port = '1234'
  const databaseName = 'test'
  const username = 'user'
  const password = 'password'

  const dbPath = 'dist/db'

  const entitiesPath = `${dbPath}/entities/**/*.js`
  const migrationssPath = `${dbPath}/migration/*.js`

  beforeEach(() => {
    when(configServiceMock.getOrThrow as jest.Mock).calledWith('DATABASE_HOST').mockReturnValue(host)
    when(configServiceMock.getOrThrow as jest.Mock).calledWith('DATABASE_PORT').mockReturnValue(port)
    when(configServiceMock.getOrThrow as jest.Mock).calledWith('DATABASE_NAME').mockReturnValue(databaseName)
    when(configServiceMock.getOrThrow as jest.Mock).calledWith('DATABASE_USERNAME').mockReturnValue(username)
    when(configServiceMock.getOrThrow as jest.Mock).calledWith('DATABASE_PASSWORD').mockReturnValue(password)
  })

  describe('mongooseModuleFactory', () => {
    it('should return connection string when called.', () => {
      expect(pgModuleFactory(configServiceMock as ConfigService)).toStrictEqual<DataSourceOptions>({
        type: 'postgres',
        host,
        port: parseInt(port),
        username,
        password,
        database: databaseName,
        synchronize: false,
        migrationsRun: true,
        entities: [ entitiesPath ],
        migrations: [ migrationssPath ],
        logging: false
      })
    })
  })
})
