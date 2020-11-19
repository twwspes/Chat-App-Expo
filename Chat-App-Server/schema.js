import { makeExecutableSchema } from 'graphql-tools';
import merge  from 'lodash/merge.js';
import Scalars from './scalars/index.js';
import Messages from './resolvers/Messages.js';
import Device from './resolvers/Device.js';
const Modules = {
    typeDefs: [
        Messages.typeDefs,
        Device.typeDefs,
    ],
    resolvers: merge(Messages.resolvers, Device.resolvers)
};
const schema = makeExecutableSchema({
    typeDefs: [
        ...Scalars.declarations,
        ...Modules.typeDefs
    ],
    resolvers: Object.assign(Object.assign({}, Scalars.resolvers), Modules.resolvers)
});
export default schema;
//# sourceMappingURL=schema.js.map