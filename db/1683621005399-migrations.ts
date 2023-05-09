import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migrations1683621005399 implements MigrationInterface {
  name = 'Migrations1683621005399'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "nom" character varying NOT NULL, "prenom" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`)
  }

}
