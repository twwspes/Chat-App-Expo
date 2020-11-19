import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import config from './config.js';
import schema from './schema.js';
const app = express();
const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
});
server.applyMiddleware({ app });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen(config.port, () => {
    console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${config.port}${server.subscriptionsPath}`);
    const connectMongoWithRetry = () => {
        mongoose
            .connect(config.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log(`🚀 MongoDB connection ready at ${config.mongoURI}`))
            .catch(err => {
            console.error('MongoDB connection error', err);
            setTimeout(connectMongoWithRetry, 5000);
        });
    };
    connectMongoWithRetry();
});
//# sourceMappingURL=server.js.map