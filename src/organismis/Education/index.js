import React from 'react';

import PropTypes from 'prop-types';

import PageTitle from '~/atoms/PageTitle';

import Timeline from '~/molecules/Timeline';

import data from '~/res/education.json';

import { Container } from './styles';

function Education({ forwardRef }) {
  return (
    <Container id="education" ref={forwardRef}>
      <PageTitle title="Education" />
      <Timeline data={data} />
    </Container>
  );
}

Education.propTypes = {
  forwardRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default React.memo(Education);
