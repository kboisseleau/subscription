
import { DataSource } from 'typeorm'
import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
import { User } from './db/entities/User'
import { Migrations1683621005399 } from './db/1683621005399-migrations'
 
config({ path: 'env/.env.development' })
 
const configService = new ConfigService()
console.log('!!!!!!!!!!!!!!!!!!!!!!', configService.get('DATABASE_PASSWORD'))
export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: [ User ],
  migrations: [ Migrations1683621005399 ]
})