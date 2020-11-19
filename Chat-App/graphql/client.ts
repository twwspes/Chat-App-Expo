import { ApolloClient, split, HttpLink, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/link-ws';
import Introspection from './introspection-result.json';

const wsLink = new WebSocketLink({
  uri: `ws://192.168.0.130:5000/graphql`,
  options: { reconnect: true }
});

const httpLink = new HttpLink({
  uri: 'http://192.168.0.130:5000/graphql'
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  cache: new InMemoryCache({ ...Introspection }),
  link: splitLink
});