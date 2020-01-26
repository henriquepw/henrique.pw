import React from 'react';

import PropsTypes from 'prop-types';

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

const Project = ({ data }) => {
  const tags = data.topics.nodes.map(item =>
    item.topic.name.replace(/-/g, ' ')
  );

  const name = data.name.replace(/-/g, ' ');

  return (
    <Container variants={ProjectAnimation}>
      <a href={data.url} alt={name} target="_blank" rel="noopener noreferrer">
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

Project.propTypes = {
  data: PropsTypes.shape({
    url: PropsTypes.string,
    name: PropsTypes.string,
    description: PropsTypes.string,
    topics: PropsTypes.object,
  }),
};

Project.defaultProps = {
  data: {},
};

export default Project;