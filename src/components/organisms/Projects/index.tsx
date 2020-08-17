import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import gql from 'graphql-tag';

import Title from '~/components/atoms/Title';

import Project from '~/components/molecules/Project';

import useAnimationRef from '~/hooks/useAnimationRef';

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
  show: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hide: {
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
    },
  },
};

type Repository = {
  id: string;
  url: string;
  name: string;
  description: string;
  topics: {
    nodes: Array<{
      topic: {
        name: string;
      };
    }>;
  };
};

interface QueryData {
  viewer: {
    repos: {
      nodes: Repository[];
    };
    repo1: Repository;
    repo2: Repository;
    repo3: Repository;
  };
}

const Projects: React.FC = () => {
  const { data, loading } = useQuery<QueryData>(QUERY);
  const [animationControl, projectRef] = useAnimationRef();

  return (
    <Container id="projects" ref={projectRef}>
      <Title animationControl={animationControl}>Projects</Title>
      <motion.ul variants={listAnimaton} animate={animationControl}>
        {(() => {
          if (loading) return <span>Loading...</span>;

          const repos = [
            ...(data?.viewer?.repos.nodes || []),
            data?.viewer.repo1,
            data?.viewer.repo2,
            data?.viewer.repo3,
          ];

          return repos.map(
            (repo) => repo && <Project key={repo.id} data={repo} />,
          );
        })()}
      </motion.ul>
      <a
        href="https://github.com/henry-ns"
        rel="noopener noreferrer"
        target="_blank"
      >
        {'See more on '}
        <FaGithub />
      </a>
    </Container>
  );
};

export default React.memo(Projects);
