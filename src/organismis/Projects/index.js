import React, { forwardRef, useContext, useEffect } from 'react';
import { Query } from 'react-apollo';
import { FaGithub } from 'react-icons/fa';

import { motion, useAnimation } from 'framer-motion';
import gql from 'graphql-tag';

import Title from '~/atoms/Title';

import Project from '~/molecules/Project';

import SectionsContext from '~/context/SectionsContext';

import { Container } from './styles';

const repositoryData = `
  id
  url
  name
  description
  topics: repositoryTopics(first: 3) {
    nodes {
      topic {
        name
      }
    }
  }
`;

const QUERY = gql`
  {
    viewer {
      repos: pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            ${repositoryData}
          }
        }
      }
      repo1: repository(name: "devRadar") {
        ${repositoryData}
      }
      repo2: repository(name: "goIssues") {
        ${repositoryData}
      }
      repo3: repository(name: "my-linux-environment") {
        ${repositoryData}
      }
    }
  }
`;
const listAnimaton = {
  hidden: {
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
    },
  },
  initial: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const Projects = forwardRef((_, ref) => {
  const { selected } = useContext(SectionsContext);

  const controlAnimaton = useAnimation();

  useEffect(() => {
    controlAnimaton.start(selected === 'projects' ? 'initial' : 'hidden');
  }, [controlAnimaton, selected]);

  return (
    <Container id="projects" ref={ref}>
      <Title>Projects</Title>
      <motion.ul variants={listAnimaton} animate={controlAnimaton}>
        <Query query={QUERY} variables={{}}>
          {({ data, loading }) => {
            if (loading) return <span>Loading...</span>;

            const repos = [
              ...data.viewer.repos.nodes,
              data.viewer.repo1,
              data.viewer.repo2,
              data.viewer.repo3,
            ];

            return repos.map(repo => <Project key={repo.id} data={repo} />);
          }}
        </Query>
      </motion.ul>
      <a
        href="https://github.com/henry-ns"
        rel="noopener noreferrer"
        target="_blank"
      >
        See more on <FaGithub />
      </a>
    </Container>
  );
});

export default React.memo(Projects);
