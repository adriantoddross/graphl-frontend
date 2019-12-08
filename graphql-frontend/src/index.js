import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});