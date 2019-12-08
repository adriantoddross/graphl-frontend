import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import './index.css';
import App from './App';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

// test query
// client
//   .query({
//     query: gql`
//     {
//       books {
//         name
//         genre
//         author {
//           name
//           age
//         }
//       }
//     }
//   `
//   })
//   .then(result => console.log(result));
  
  const Apollo = () => (
    <ApolloProvider client={client}>
      <div>
        <App />
      </div>
    </ApolloProvider>
  );
  
  render(<Apollo />, document.getElementById('root'));

  // ReactDOM.render(<App />, document.getElementById('root'));