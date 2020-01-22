import React from 'react';

import PropsTypes from 'prop-types';

import { Container } from './styles';

const Project = ({ title, description, tags }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {tags.map(tech => (
          <li>{tech}</li>
        ))}
      </ul>
      <button type="button">read more</button>
    </Container>
  );
};

Project.propTypes = {
  title: PropsTypes.string.isRequired,
  description: PropsTypes.string.isRequired,
  tags: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default Project;
