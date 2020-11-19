import NEString from './NEString.js';
import Timestamp from './Timestamp.js';
export default {
    declarations: [
        NEString.declaration,
        Timestamp.declaration,
    ],
    resolvers: Object.assign(Object.assign({}, NEString.type), Timestamp.type)
};
//# sourceMappingURL=index.js.map