import React from 'react';

import { motion, MotionProps } from 'framer-motion';

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  MotionProps;

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </motion.a>
  );
};

export default ExternalLink;
