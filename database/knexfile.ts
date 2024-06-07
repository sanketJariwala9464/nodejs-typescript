import dotenv from 'dotenv';
import type { Knex } from 'knex';
import path = require('path');

dotenv.config({
  path: path.resolve((process.env.PWD || process.cwd()), '.env'),
});

const config: { [key: string]: Knex.Config } = {
  development: {
    debug: false,
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: 'utf8',
    },
    migrations: {
      directory: './migrations',
      extension: 'ts',
    },
    seeds: {
      directory: './seeds',
      extension: 'ts',
    },
  },
};

export default config;
