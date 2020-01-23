import React from 'react';

import PropsTypes from 'prop-types';

import { Container } from './styles';

const Project = ({ data }) => {
  const tags = data.repositoryTopics.nodes.map(item =>
    item.topic.name.replace('-', ' ')
  );

  return (
    <Container>
      <a
        href={data.url}
        alt={data.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>{data.name}</h1>
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
    repositoryTopics: PropsTypes.object,
  }),
};

Project.defaultProps = {
  data: {},
};

export default Project;
