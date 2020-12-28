import { Variants } from 'framer-motion';

export const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.9,
    },
  },
};

export const scaleYInOut: Variants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
};

export const fadeInUp: Variants = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const buttonEffect: Variants = {
  hover: { scale: 1.2 },
  tap: { scale: 0.95 },
};
