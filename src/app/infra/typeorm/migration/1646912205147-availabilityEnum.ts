import {MigrationInterface, QueryRunner} from "typeorm";

export class availabilityEnum1646912205147 implements MigrationInterface {
    name = 'availabilityEnum1646912205147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "availability"`);
        await queryRunner.query(`CREATE TYPE "public"."user_availability_enum" AS ENUM('not-available', 'mornings', 'afternoon', 'evenings')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "availability" "public"."user_availability_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "availability"`);
        await queryRunner.query(`DROP TYPE "public"."user_availability_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "availability" character varying NOT NULL`);
    }

}
