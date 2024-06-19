import { Sequelize as Sl } from 'sequelize-typescript';
import { UserProfile } from "../../model/user-profile.model.js";
import { User } from "../../model/user.model.js";
import chalk from 'chalk';


interface KeyInterface {
  DB_HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_PORT: number;
  DB_SYNC: boolean;

}


class Sequelize {
  private sequelize: Sl;


  constructor(private readonly config: KeyInterface) {
    const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_SYNC } = this.config

    this.sequelize = new Sl(DB_NAME, DB_USERNAME, DB_PASSWORD, {
      host: DB_HOST,
      dialect: 'mysql',
      port: DB_PORT,
      dialectOptions: { decimalNumbers: true },
      define: { timestamps: false },
      logging: false
    });

    const initialize  = async (): Promise<void> => {
      try {

        /* INIT CREDENTIALS */
        await this.sequelize.authenticate();

        /* APPLY MODELS */
        this.sequelize.addModels([User, UserProfile]);

        /* ALTER THE TABLE AND SYNC THE NEW TABLE  */
        await this.sequelize.sync({ alter: DB_SYNC });

        console.log(chalk.green('SEQUELIZE HAS BEEN ESTABLISHED.'))

      } catch (error) {
        console.log(chalk.red('UNABLE TO CONNECT TO THE DATABASE.'));
      }
    }

    initialize().then(r => chalk.green(r))

  }

}

export default Sequelize;