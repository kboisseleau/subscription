
import { DataSource } from 'typeorm'
import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
import { User } from './db/entities/User'
import { Migrations1683728527664 } from './db/migrations/1683728527664-migrations'
 
config({ path: 'env/.env.development' })
 
const configService = new ConfigService()

export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: [ User ],
  migrations: [ Migrations1683728527664 ]
})