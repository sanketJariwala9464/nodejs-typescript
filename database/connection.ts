import knex, { Knex } from 'knex';
import 'dotenv/config';
import config from '@/database/knexfile';

const environment = process.env.NODE_ENV || 'development';
const db = knex(config[environment]);  

(global as any).db = db;

export default db;