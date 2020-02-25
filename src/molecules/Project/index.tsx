import React, { FC } from 'react';

import { Container } from './styles';

const ProjectAnimation = {
  hidden: {
    y: 50,
    scale: 0,
    opacity: 0,
  },
  initial: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
};

interface Props {
  data: {
    url: string;
    name: string;
    description: string;
    topics: {
      nodes: {
        topic: {
          name: string;
        };
      }[];
    };
  };
}

const Project: FC<Props> = ({ data }) => {
  const tags = data.topics.nodes.map(item =>
    item.topic.name.replace(/-/g, ' ')
  );

  const name = data.name.replace(/-/g, ' ');

  return (
    <Container variants={ProjectAnimation}>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <h1>{name}</h1>
        <p>{data.description}</p>
        <ul>
          {tags.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <span>read more</span>
      </a>
    </Container>
  );
};

export default Project;
