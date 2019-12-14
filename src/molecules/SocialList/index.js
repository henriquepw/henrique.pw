import React from 'react';

import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from 'react-icons/fi';

import { Container } from './styles';
import SocialIcon from '~/atoms/SocialIcon';

const icons = [
  ['https://github.com/henry-ns', 'Meu perfil do github', <FiGithub />],
  [
    'https://www.linkedin.com/in/henry-ns/',
    'Meu perfil do linkedin',
    <FiLinkedin />,
  ],
  [
    'https://instagram.com/_henry_ns',
    'Meu perfil do instagram',
    <FiInstagram />,
  ],
  ['https://twitter.com/_henry_ns', 'Meu perfil do twitter', <FiTwitter />],
  ['mailto:enrque.ns@gmail.com', 'Meu e-mail para contatos', <FiMail />],
];

function SocialList() {
  return (
    <Container>
      {icons.map(item => (
        <li key={item[0]}>
          <SocialIcon link={item[0]} title={item[1]}>
            {item[2]}
          </SocialIcon>
        </li>
      ))}
    </Container>
  );
}

export default SocialList;
