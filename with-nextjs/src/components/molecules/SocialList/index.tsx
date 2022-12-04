import {
  FiMail,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiAlertCircle,
} from 'react-icons/fi';

import type { Entry } from 'contentful';
import { motion } from 'framer-motion';

import ExternalLink from '@/components/atoms/ExternalLink';

import { buttonEffect, fadeInUp } from '@/styles/animations/global';

import { Container } from './styles';

const ICONS: Record<string, JSX.Element> = {
  email: <FiMail size={28} />,
  github: <FiGithub size={28} />,
  instagram: <FiInstagram size={28} />,
  linkedin: <FiLinkedin size={28} />,
  twitter: <FiTwitter size={28} />,
  default: <FiAlertCircle size={28} />,
};

export type SocialMedia = Entry<{
  name: string;
  url: string;
}>;

interface SocialListProps {
  items: SocialMedia[];
  isSecondary?: boolean;
}

function SocialList({ items, isSecondary }: SocialListProps) {
  return (
    <Container variants={fadeInUp} isSecondary={isSecondary}>
      {items.map(item => (
        <motion.li
          key={item.sys.id}
          variants={buttonEffect}
          whileHover="hover"
          whileTap="tap"
        >
          <ExternalLink href={item.fields.url}>
            {ICONS[item.fields.name.toLowerCase()] || ICONS.default}
          </ExternalLink>
        </motion.li>
      ))}
    </Container>
  );
}

export default SocialList;
