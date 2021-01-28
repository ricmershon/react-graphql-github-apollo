/**
 * @file    Contains application configuration and entry point.
 * 
 * @author  Ric Mershon from Road to GraphQL.
 */

// EXTERNAL DEPENDENCIES

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

// INTERNAL DEPENDENCIES

import App from './App/App.jsx';
import './style.css';
import reportWebVitals from './reportWebVitals';
import { GITHUB_BASE_URL } from './constants/index';

/*
 * CONFIGURATION
 * - HttpLink instance
 * - InMemoryCache instance, which normalizes data, caches requests to avoid
 *   duplicates, and make it possible to read and write data to the cache.
 * - onError instance for appllication level error handling.
 * - AppoloClient instance with HttpLink instance and InMemoryCache instance.
 */

const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
        authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
        }`
    }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log("There were GraphQL errors: ", graphQLErrors);
    }
    if (networkError) {
        console.log("There was a network error: ", networkError);
    }
})

const link = ApolloLink.from([errorLink, httpLink])

const cache = new InMemoryCache();

const client = new ApolloClient({ link, cache })

/**
 * React entry point
 */

ReactDOM.render(
    <ApolloProvider client={ client }>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
