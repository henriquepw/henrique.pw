import { Variants, Transition } from 'framer-motion';

export const imageVariants: Variants = {
  initial: {
    x: -20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.6,
    },
  },
};

export const dividerTransition: Transition = {
  delay: 0.7,
  duration: 0.4,
  ease: 'easeIn',
};
