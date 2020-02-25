import React, { FC } from 'react';

import TimelineItem from '~/atoms/TimelineItem';

import { Container } from './styles';

interface Props {
  data: {
    year: number;
    title: string;
    description: string;
  }[];
}

const Timeline: FC<Props> = ({ data }) => (
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

export default Timeline;
