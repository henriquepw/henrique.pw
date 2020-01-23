import React, { forwardRef } from 'react';
import { Query } from 'react-apollo';

import gql from 'graphql-tag';

import Title from '~/atoms/Title';

import Project from '~/molecules/Project';

import { Container } from './styles';

const QUERY = gql`
  {
    viewer {
      repos: pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            id
            url
            name
            description
            repositoryTopics(first: 3) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Projects = forwardRef((_, ref) => {
  return (
    <Container id="projects" ref={ref}>
      <Title>Projects</Title>
      <ul>
        <Query query={QUERY} variables={{}}>
          {({ data, loading }) =>
            loading ? (
              <span>Loading...</span>
            ) : (
              data.viewer.repos.nodes.map(repo => (
                <Project key={repo.id} data={repo} />
              ))
            )
          }
        </Query>
      </ul>
    </Container>
  );
});

export default React.memo(Projects);
