import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language/index.js';
import { gql } from 'apollo-server';
const parse = (v) => {
    if (v === undefined || v === null) {
        throw new Error('field should be String');
    }
    return v;
};
const literal = (ast) => {
    if (ast.kind === Kind.INT) {
        return parse(ast.value);
    }
    throw new Error('field should be String');
};
export default {
    declaration: gql `
    scalar Timestamp
  `,
    type: {
        Timestamp: new GraphQLScalarType({
            name: 'Timestamp',
            description: 'Timestamp format',
            serialize: parse,
            parseValue: parse,
            parseLiteral: literal
        }),
    }
};
//# sourceMappingURL=Timestamp.js.map