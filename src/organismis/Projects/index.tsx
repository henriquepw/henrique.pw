import React, {
  forwardRef,
  useContext,
  useEffect,
  ForwardRefRenderFunction,
} from 'react';
import { FaGithub } from 'react-icons/fa';

import { useQuery } from '@apollo/react-hooks';
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

type Repository = {
  id: string;
  url: string;
  name: string;
  description: string;
  topics: {
    nodes: {
      topic: {
        name: string;
      };
    };
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

const Projects: ForwardRefRenderFunction<HTMLElement> = (_, ref) => {
  const { selected } = useContext(SectionsContext);
  const { data, loading } = useQuery<QueryData, {}>(QUERY);

  const controlAnimaton = useAnimation();

  useEffect(() => {
    controlAnimaton.start(selected === 'projects' ? 'initial' : 'hidden');
  }, [controlAnimaton, selected]);

  return (
    <Container id="projects" ref={ref}>
      <Title>Projects</Title>
      <motion.ul variants={listAnimaton} animate={controlAnimaton}>
        {(() => {
          if (loading) return <span>Loading...</span>;

          const repos = [
            ...data?.viewer.repos.nodes,
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

export default React.memo(forwardRef(Projects));
