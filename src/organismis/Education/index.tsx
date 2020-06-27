import React, { forwardRef } from 'react';

import Title from '~/atoms/Title';

import Timeline from '~/molecules/Timeline';

import data from '~/assets/data/education.json';

import Section from '~/styles/section';

const Education = forwardRef<HTMLElement>((_, ref) => (
  <Section id="education" ref={ref}>
    <Title animateDelay={0}>Education</Title>
    <Timeline data={data} />
  </Section>
));

export default React.memo(Education);
