import React from 'react';
import {
  FiMail,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

import { Entry } from 'contentful';
import { motion } from 'framer-motion';

import ExternalLink from '@/components/atoms/ExternalLink';

import { buttonEffect, fadeInUp } from '@/animations/global';

import { Container } from './styles';

const ICONS = {
  email: <FiMail size={28} />,
  github: <FiGithub size={28} />,
  instagram: <FiInstagram size={28} />,
  linkedin: <FiLinkedin size={28} />,
  twitter: <FiTwitter size={28} />,
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
    <Container variants={fadeInUp}>
      {items.map((item) => (
        <motion.li
          key={item.sys.id}
          variants={buttonEffect}
          whileHover="hover"
          whileTap="tap"
        >
          <ExternalLink href={item.fields.url}>
            {ICONS[item.fields.name.toLowerCase()]}
          </ExternalLink>
        </motion.li>
      ))}
    </Container>
  );
};

export default SocialList;
