import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'isomorphic-fetch';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  fetch,
});

/**
 * An auth middleware for add the GitHub token on the requests
 */
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `token ${process.env.GATSBY_GITHUB_TOKEN}`,
    },
  });

  return forward(operation);
});

export default new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
