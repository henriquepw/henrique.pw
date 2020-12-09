import React from 'react';

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
