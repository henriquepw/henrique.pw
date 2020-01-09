import React, { forwardRef } from 'react';

import PageTitle from '~/atoms/PageTitle';

import Timeline from '~/molecules/Timeline';

import data from '~/assets/data/education.json';

import Section from '~/styles/section';

const Education = forwardRef((_, ref) => (
  <Section id="education" ref={ref}>
    <PageTitle title="Education" />
    <Timeline data={data} />
  </Section>
));

export default React.memo(Education);
