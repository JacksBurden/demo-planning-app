import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// Create link to GraphQL backend running on Hasura
// using Heroku and Postgres
const httpLink = createHttpLink({
  uri: 'https://planning-backend.herokuapp.com/v1/graphql'
})

// Setup ApolloClient instance for GraphQL queries
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    dataIdFromObject: (object) => {
      if(object.__typename === 'user') {
        return object.firstname;
      }
    }
  })
})

// Render the app
ReactDOM.render(
  <BrowserRouter>
      <ApolloProvider client={client}>
          <App/>
      </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
