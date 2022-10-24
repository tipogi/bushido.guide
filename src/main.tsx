import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './components/Root'
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import { GRAPHQL_SERVER } from './constants';

import './index.css'

const client = new ApolloClient({
  uri: GRAPHQL_SERVER,
  cache: new InMemoryCache()
})

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);
