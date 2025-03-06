import { DataSource } from "typeorm";
import { User } from './entity/User';
import '../config/dotenv';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    migrations: ["src/postgres/migrations/*.ts"],
    migrationsRun: false,
    migrationsTableName: 'lyvivo_migration_table',
    entities: [User]
})