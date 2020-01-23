import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `token ${process.env.GATSBY_GITHUB_TOKEN}`,
      },
    });
  },
  fetch,
});
