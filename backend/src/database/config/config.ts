import 'dotenv/config';
import { Options } from 'sequelize'

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST
} = process.env;

const config: Options = {
  username: DB_USER || 'root',
  password: 'password',
  database: DB_NAME || 'go-live-tech-album',
  host: DB_HOST || 'db', 
  dialect: "mysql",
};

export = config;