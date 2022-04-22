import { motion, MotionProps } from 'framer-motion';

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  MotionProps;

function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </motion.a>
  );
}

export default ExternalLink;
