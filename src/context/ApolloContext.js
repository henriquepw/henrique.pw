import ApolloClient from 'apollo-boost';

export const isBrowser = typeof window !== 'undefined';

export const client = isBrowser
  ? new ApolloClient({
      uri: 'https://api.github.com/graphql',
      request: async operation => {
        operation.setContext({
          headers: {
            authorization: `token ${process.env.GATSBY_GITHUB_TOKEN}`,
          },
        });
      },
    })
  : {};
