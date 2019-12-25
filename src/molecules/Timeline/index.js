import React from 'react';

import TimelineItem from '~/atoms/TimelineItem';

import { Container } from './styles';

const item = {
  year: 2019,
  title: 'Olympic Project',
  description: 'Finding Talent in Computing Through Olympics',
};

const data = [1, 2, 3, 4, 5, 6];

function Timeline() {
  return (
    <Container>
      {data.map(elem => (
        <TimelineItem
          key={`${elem}_${item.title}`}
          year={item.year}
          title={item.title}
          description={item.description}
        />
      ))}
    </Container>
  );
}

export default Timeline;
