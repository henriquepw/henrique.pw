import React from 'react';

import PropTypes from 'prop-types';

import TimelineItem from '~/atoms/TimelineItem';

import { Container } from './styles';

function Timeline({ data }) {
  return (
    <Container>
      {data.map(item => (
        <TimelineItem
          key={`${item.year}_${item.title}`}
          year={item.year}
          title={item.title}
          description={item.description}
        />
      ))}
    </Container>
  );
}

Timeline.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Timeline;
