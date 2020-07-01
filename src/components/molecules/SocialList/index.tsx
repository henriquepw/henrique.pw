import React, { useMemo } from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from 'react-icons/fi';

import SocialIcon from '~/components/atoms/SocialIcon';

import { Container } from './styles';

const data = [
  {
    name: 'github',
    link: 'https://github.com/henry-ns',
    description: 'My github profile',
    component: <FiGithub />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/henry-ns/',
    description: 'My linkedin profile',
    component: <FiLinkedin />,
  },
  {
    name: 'instagram',
    link: 'https://instagram.com/_henry_ns',
    description: 'My instagram profile',
    component: <FiInstagram />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/_henry_ns',
    description: 'My twitter profile',
    component: <FiTwitter />,
  },
  {
    name: 'email',
    link: 'mailto:hey@thehenry.dev',
    description: 'My email for contacts',
    component: <FiMail />,
  },
];

interface Props {
  isAnimated?: boolean;
  excluded?: string[];
}

const SocialList: React.FC<Props> = ({ excluded = [], isAnimated = true }) => {
  const dataFiltered = useMemo(
    () => data.filter((item) => !excluded.includes(item.name)),
    [excluded],
  );

  return (
    <Container isAnimated={isAnimated}>
      {dataFiltered.map((item) => (
        <li key={item.link}>
          <SocialIcon link={item.link} alt={item.description}>
            {item.component}
          </SocialIcon>
        </li>
      ))}
    </Container>
  );
};

export default SocialList;
