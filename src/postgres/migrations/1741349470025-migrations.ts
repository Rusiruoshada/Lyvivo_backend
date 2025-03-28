import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1741349470025 implements MigrationInterface {
    name = 'Migrations1741349470025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "type" "public"."user_type_enum" NOT NULL DEFAULT 'user', "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "mobileNumber" integer NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_3a6f6a955e65852415ee7bbf1ec" UNIQUE ("mobileNumber"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
