import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STAGGING_V1,
  cache: new InMemoryCache(),
});

export default client;