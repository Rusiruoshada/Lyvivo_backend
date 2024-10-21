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
    synchronize: true,
    logging: false,
    entities: [User]
})