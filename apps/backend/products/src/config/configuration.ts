import { registerAs } from '@nestjs/config';
import { DatabaseConfigInterface } from './interfaces/database.config.interface';

export const CONFIG_DATABASE = 'database';
export default registerAs(
  CONFIG_DATABASE,
  (): DatabaseConfigInterface => ({
    uri: process.env.DB_URI || 'mongodb://localhost:27017/Nest-Data',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  }),
);
