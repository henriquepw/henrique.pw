import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

function TimelineItem({ year, title, description }) {
  return (
    <Container>
      <h2>{year}</h2>
      <span />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Container>
  );
}

TimelineItem.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TimelineItem;
