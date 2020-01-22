import React from 'react';

import PropTypes from 'prop-types';

import Title from '~/atoms/Title';

import Project from '~/molecules/Project';

import { Container } from './styles';

const data = [1, 2, 3, 4];

function Projects({ forwardRef }) {
  return (
    <Container id="projects" ref={forwardRef}>
      <Title>Projects</Title>
      <ul>
        {data.map(item => (
          <Project
            key={item}
            title="Meetapp"
            description="App agregador de eventos para desenvolvedores"
            tags={['ReactJS', 'React Native', 'Node.js']}
          />
        ))}
      </ul>
    </Container>
  );
}

Projects.propTypes = {
  forwardRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default React.memo(Projects);
