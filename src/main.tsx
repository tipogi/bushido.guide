import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './components/Root'
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';

import './index.css'
import { URI_IP, URI_PORT } from './constants';

const client = new ApolloClient({
  uri: `http://${URI_IP}:${URI_PORT}/graphql`,
  cache: new InMemoryCache()
})

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);
