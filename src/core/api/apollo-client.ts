import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_SCHEMA = 'https://api-frontend-challenge.herokuapp.com/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_SCHEMA,
  cache: new InMemoryCache(),
});

export default client;
