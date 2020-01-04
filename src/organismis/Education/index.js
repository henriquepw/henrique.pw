import React from 'react';

import PropTypes from 'prop-types';

import PageTitle from '~/atoms/PageTitle';

import Timeline from '~/molecules/Timeline';

import data from '~/assets/data/education.json';

import Section from '~/styles/section';

function Education({ forwardRef }) {
  return (
    <Section id="education" ref={forwardRef}>
      <PageTitle title="Education" />
      <Timeline data={data} />
    </Section>
  );
}

Education.propTypes = {
  forwardRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default React.memo(Education);
