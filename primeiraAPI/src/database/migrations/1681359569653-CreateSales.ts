import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSales1681359569653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sales",
                columns: [
                  {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                  },
                  {
                    name: "total",
                    type: "float",
                  },
                  {
                    name: "description",
                    type: "varchar",
                  },
                  {
                    name: "observations",
                    type: "varchar",
                  },
                  {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                  },
                  {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                  },
                ],
              })
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("sales");
    }

}
