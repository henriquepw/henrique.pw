import React from 'react';

import PropTypes from 'prop-types';

import PageTitle from '~/atoms/PageTitle';

import Section from '~/styles/section';

function Projects({ forwardRef }) {
  return (
    <Section id="projects" ref={forwardRef}>
      <PageTitle title="Projects" />
    </Section>
  );
}

Projects.propTypes = {
  forwardRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default React.memo(Projects);
