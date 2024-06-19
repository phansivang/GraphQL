import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import Sequelize from "./lib/sequelize/index.js";
import { UserSchema } from "./schema/user.schema.js";
import { resolvers } from "./resolver/user.resolver.js";
import Config from "./lib/config/index.js";
import chalk from "chalk";


const config = new Config().getKey()

const server = new ApolloServer({ typeDefs: UserSchema, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: config.PORT }});

new Sequelize(config)


console.log(chalk.green(`SERVER IS READY AT: ${ url }`));