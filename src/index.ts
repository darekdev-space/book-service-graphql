import 'reflect-metadata';
import {ApolloServer} from 'apollo-server-express';
import express, {Application} from 'express';
import {buildSchema} from 'type-graphql';

import {PORT} from './constans';
import HelloResolver from './resolvers/hello';

class App {
    public server: Application = express();

    constructor() {
        this.addMiddleware();
    }

    async createApolloServer(): Promise<ApolloServer> {
        return new ApolloServer({
            schema: await buildSchema({
                resolvers: [HelloResolver],
                validate: false,
            }),
        });
    }

    async addMiddleware(): Promise<void> {
        const apolloServer = await this.createApolloServer();
        apolloServer.applyMiddleware({app: this.server});
    }

    run() {
        this.server.listen(PORT, () => {
            console.log(`Server starting on port: ${PORT}`);
        });
    }
}

const service = new App();
service.run();
