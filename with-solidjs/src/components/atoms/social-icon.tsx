import { Motion } from '@motionone/solid';
import {
  FiMail,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiAlertCircle,
} from 'solid-icons/fi';

const ICONS = {
  email: FiMail,
  github: FiGithub,
  instagram: FiInstagram,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  default: FiAlertCircle,
} as const;

const LINKS: Record<string, string> = {
  email: 'mailto:hey@henrique.pw',
  github: 'https://github.com/henry-ns',
  instagram: 'https://www.instagram.com/_henry_ns/',
  linkedin: 'https://www.linkedin.com/in/henry-ns/',
  default: 'https://henrique.pw/',
};

type Props = {
  name?: 'email' | 'github' | 'instagram' | 'linkedin';
};

export function SocialIcon(props: Props) {
  const link = () => LINKS[props.name || 'default'];

  const icon = () => {
    const Icon = ICONS[props.name || 'default'];

    return <Icon size={32} class="stroke-secondary-500 stroke-1" />;
  };

  return (
    <Motion.li hover={{ scale: 1.2 }} press={{ scale: 0.9 }}>
      <a href={link()} target="_blank" rel="noopener noreferrer">
        {icon()}
      </a>
    </Motion.li>
  );
}
