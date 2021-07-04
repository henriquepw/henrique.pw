import { TargetAndTransition, Transition } from 'framer-motion';

export const loaderAnimate: TargetAndTransition = { rotate: 360 };

export const loaderTransition: Transition = {
  duration: 2,
  ease: 'linear',
  repeat: Infinity,
};
