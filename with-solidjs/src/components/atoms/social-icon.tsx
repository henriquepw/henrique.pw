import {
  FiMail,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiAlertCircle,
} from 'solid-icons/fi';
import { JSX } from 'solid-js';

const ICONS: Record<string, JSX.Element> = {
  email: <FiMail size={32} class="stroke-secondary-500" />,
  github: <FiGithub size={32} class="stroke-secondary-500" />,
  instagram: <FiInstagram size={32} class="stroke-secondary-500" />,
  linkedin: <FiLinkedin size={32} class="stroke-secondary-500" />,
  twitter: <FiTwitter size={32} class="stroke-secondary-500" />,
  default: <FiAlertCircle size={32} class="stroke-secondary-500" />,
};

const LINKS: Record<string, string> = {
  email: 'https://henrique.pw/',
  github: 'https://henrique.pw/',
  instagram: 'https://henrique.pw/',
  linkedin: 'https://henrique.pw/',
  twitter: 'https://henrique.pw/',
  default: 'https://henrique.pw/',
};

type Props = {
  name?: 'email' | 'github' | 'instagram' | 'linkedin' | 'twitter' | '';
};

export function SocialIcon(props: Props) {
  const icon = () => ICONS[props.name || 'default'];
  const link = () => LINKS[props.name || 'default'];

  return (
    <a href={link()} target="_blank" rel="noopener noreferrer">
      {icon()}
    </a>
  );
}
