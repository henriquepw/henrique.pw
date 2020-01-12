import React from 'react';

import PropTypes from 'prop-types';

import Title from '~/atoms/Title';

import Section from '~/styles/section';

function Projects({ forwardRef }) {
  return (
    <Section id="projects" ref={forwardRef}>
      <Title>Projects</Title>
    </Section>
  );
}

Projects.propTypes = {
  forwardRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default React.memo(Projects);
