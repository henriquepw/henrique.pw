import React from 'react';
import {
  FiMail,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

import { Entry } from 'contentful';

import ExternalLink from '@/components/atoms/ExternalLink';

import { Container } from './styles';

const ICONS = {
  email: <FiMail size={24} />,
  github: <FiGithub size={24} />,
  instagram: <FiInstagram size={24} />,
  linkedin: <FiLinkedin size={24} />,
  twitter: <FiTwitter size={24} />,
};

export type SocialMedia = Entry<{
  name: string;
  url: string;
}>;

interface SocialListProps {
  items: SocialMedia[];
}

const SocialList: React.FC<SocialListProps> = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <li key={item.sys.id}>
          <ExternalLink href={item.fields.url}>
            {ICONS[item.fields.name.toLowerCase()]}
          </ExternalLink>
        </li>
      ))}
    </Container>
  );
};

export default SocialList;
