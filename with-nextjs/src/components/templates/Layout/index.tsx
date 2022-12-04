import type { Variants, Transition } from 'framer-motion';

import SEO, { SEOProps } from '@/components/atoms/SEO';

import { Container, TransitionFrame } from './styles';

interface LayoutProps {
  id?: string;
  className?: string;
  seo: SEOProps;
  children: React.ReactNode;
}

const transitionVariants: Variants = {
  initial: {
    x: '0%',
  },
  animate: {
    x: '100%',
    transition: {
      delay: 0.15,
      duration: 0.5,
    },
  },
  exit: {
    x: ['-100%', '0%'],
    transition: {
      duration: 0.5,
      times: [0, 1],
    },
  },
};

const transition: Transition = {
  duration: 0.5,
  ease: 'easeInOut',
};

function Layout({ children, seo, ...rest }: LayoutProps) {
  return (
    <Container {...rest}>
      <TransitionFrame
        variants={transitionVariants}
        transition={transition}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <SEO {...seo} />
      {children}
    </Container>
  );
}

export default Layout;
