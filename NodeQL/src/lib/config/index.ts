import {env} from "node:process";
import dotenv from 'dotenv';

dotenv.config();


class Config {
  public PORT?: string;
  public DB_HOST?: string;
  public DB_USERNAME?: string;
  public DB_PASSWORD?: string;
  public DB_NAME?: string;
  public DB_PORT?: string;
  public DB_SYNC?: boolean;

  constructor() {
    this.PORT = env.PORT;
    this.DB_HOST = env.DB_HOST;
    this.DB_USERNAME = env.DB_USERNAME;
    this.DB_PASSWORD = env.DB_PASSWORD;
    this.DB_NAME = env.DB_NAME;
    this.DB_PORT = env.DB_PORT;
    this.DB_SYNC = Boolean(env.DB_SYNC);
  }

  public getKey() {
    if (!this.PORT) throw new Error("PORT IS MISSING");
    if (!this.DB_HOST) throw new Error("DB_HOST IS MISSING");
    if (!this.DB_USERNAME) throw new Error("USERNAME IS MISSING");
    if (!this.DB_PASSWORD) throw new Error("PASSWORD IS MISSING");
    if (!this.DB_NAME) throw new Error("DB_NAME IS MISSING");
    if (!this.DB_PORT) throw new Error("DB_PORT IS MISSING");
    if (!this.DB_SYNC) throw new Error("DB_PORT IS MISSING");

    return {
      // DEVELOPMENT
      PORT: +this.PORT,

      // DATABASE
      DB_HOST: this.DB_HOST,
      DB_USERNAME: this.DB_USERNAME,
      DB_PASSWORD: this.DB_PASSWORD,
      DB_NAME: this.DB_NAME,
      DB_PORT: +this.DB_PORT,
      DB_SYNC: this.DB_SYNC

      // ADD MORE AS YOUR ENV

      
    };
  }
}

export default Config;
