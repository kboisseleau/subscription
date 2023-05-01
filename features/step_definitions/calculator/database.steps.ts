import { Given, When, Then } from 'cucumber'
import { pgModuleFactory } from '../../../src/modules/config/database/class/database'
import { ConfigService } from '@nestjs/config'
import { DataSourceOptions } from 'typeorm'

let result: DataSourceOptions

Given('I have ask database connection', (conf: ConfigService) => {
  result = pgModuleFactory(conf)
})

Then('the result should be {int} on the screen', (expectedResult: DataSourceOptions) => {
  expect(typeof expectedResult).toBe('DataSourceOptions')
  expect(result).toEqual(expectedResult)
})
