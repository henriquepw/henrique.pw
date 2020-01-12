import React, { forwardRef } from 'react';

import SkillItem from '~/atoms/SkillItem';
import Title from '~/atoms/Title';

import arduinoIcon from '~/assets/svgs/arduino.svg';
import cIcon from '~/assets/svgs/c.svg';
import css3Icon from '~/assets/svgs/css3.svg';
import html5Icon from '~/assets/svgs/html5.svg';
import iotIcon from '~/assets/svgs/iot.svg';
import javaIcon from '~/assets/svgs/java.svg';
import jsIcon from '~/assets/svgs/javascript.svg';
import kotlinIcon from '~/assets/svgs/kotlin.svg';
import nodeIcon from '~/assets/svgs/nodejs.svg';
import pythonIcon from '~/assets/svgs/python.svg';
import reactIcon from '~/assets/svgs/react.svg';
import tsIcon from '~/assets/svgs/typescript.svg';

import { Container, SubTitle } from './styles';

const focus = [
  {
    description: 'Typescript',
    icon: tsIcon,
  },
  {
    description: 'Javascript',
    icon: jsIcon,
  },
  {
    description: 'HTML5',
    icon: html5Icon,
  },
  {
    description: 'CSS3',
    icon: css3Icon,
  },
  {
    description: 'React',
    icon: reactIcon,
  },
  {
    description: 'Node.js',
    icon: nodeIcon,
  },
];

const others = [
  {
    description: 'Arduino',
    icon: arduinoIcon,
  },
  {
    description: 'Java',
    icon: javaIcon,
  },
  {
    description: 'IoT',
    icon: iotIcon,
  },
  {
    description: 'C/C++',
    icon: cIcon,
  },
  {
    description: 'Kotlin',
    icon: kotlinIcon,
  },
  {
    description: 'Python',
    icon: pythonIcon,
  },
];

const Skills = forwardRef((_, ref) => {
  return (
    <Container id="skills" ref={ref}>
      <Title>Skills</Title>
      <div>
        <SubTitle>My Focus</SubTitle>
        <ul>
          {focus.map(item => (
            <SkillItem
              key={item.description}
              src={item.icon}
              description={item.description}
            />
          ))}
        </ul>
        <SubTitle>I&apos;ve made cool things with</SubTitle>
        <ul>
          {others.map(item => (
            <SkillItem
              key={item.description}
              src={item.icon}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
});

export default Skills;
