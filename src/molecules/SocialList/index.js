import React from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from 'react-icons/fi';

import PropTypes from 'prop-types';

import SocialIcon from '~/atoms/SocialIcon';

import { Container } from './styles';

const data = [
  {
    name: 'github',
    link: 'https://github.com/henry-ns',
    description: 'Meu perfil do github',
    component: <FiGithub />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/henry-ns/',
    description: 'Meu perfil do linkedin',
    component: <FiLinkedin />,
  },
  {
    name: 'instagram',
    link: 'https://instagram.com/_henry_n',
    description: 'Meu perfil do instagram',
    component: <FiInstagram />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/_henry_ns',
    description: 'Meu perfil do twitter',
    component: <FiTwitter />,
  },
  {
    name: 'email',
    link: 'mailto:enrque.ns@gmail.com',
    description: 'Meu e-mail para contatos',
    component: <FiMail />,
  },
];

function SocialList({ excluded }) {
  return (
    <Container>
      {data.map(item => {
        const isExluded = excluded.includes(item.name);

        return (
          !isExluded && (
            <li key={item.link}>
              <SocialIcon link={item.link} title={item.description}>
                {item.component}
              </SocialIcon>
            </li>
          )
        );
      })}
    </Container>
  );
}

SocialList.propTypes = {
  excluded: PropTypes.arrayOf(PropTypes.string),
};

SocialList.defaultProps = {
  excluded: [],
};

export default SocialList;
