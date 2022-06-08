import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/api',
  cache: new InMemoryCache(),
});

console.log(client);
