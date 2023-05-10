import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migrations1683728527664 implements MigrationInterface {
  name = 'Migrations1683728527664'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "sub"."user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "lastname" character varying NOT NULL, "firstname" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "sub"."user"`)
  }

}
