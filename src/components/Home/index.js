import React from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from 'react-icons/fi';

import SocialIcon from './SocialIcon';
import { Container } from './styles';

const icons = [
  ['https://github.com/henry-ns', <FiGithub />],
  ['https://www.linkedin.com/in/henry-ns/', <FiLinkedin />],
  ['https://instagram.com/_henry_ns', <FiInstagram />],
  ['https://twitter.com/_henry_ns', <FiTwitter />],
  ['mailto:enrque.ns@gmail.com', <FiMail />],
];

export default function Home() {
  return (
    <Container>
      <h1>
        Henrique <strong>Miranda</strong>
      </h1>
      <h2>
        Telematics student, Full Stack Developer <strong>&</strong> Designer
      </h2>

      <div />

      <ul>
        {icons.map((item, index) => (
          <li>
            <SocialIcon link={item[0]} key={String(index)}>
              {item[1]}
            </SocialIcon>
          </li>
        ))}
      </ul>
    </Container>
  );
}
