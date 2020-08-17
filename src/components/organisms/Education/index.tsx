import React from 'react';

import Title from '~/components/atoms/Title';

import Timeline from '~/components/molecules/Timeline';

import useAnimationRef from '~/hooks/useAnimationRef';

import data from '~/assets/data/education.json';

import Section from '~/styles/section';

const Education: React.FC = () => {
  const [animationControl, educationRef] = useAnimationRef();

  return (
    <Section id="education" ref={educationRef}>
      <Title animationControl={animationControl} animateDelay={0}>
        Education
      </Title>
      <Timeline data={data} />
    </Section>
  );
};

export default React.memo(Education);
