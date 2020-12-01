import React from 'react';

import { motion } from 'framer-motion';

const animationVariants = {
  hover: { scale: 1.3 },
  tap: { scale: 0.95 },
};

const PlayerButton: React.FC = ({ children }) => (
  <motion.span variants={animationVariants} whileHover="hover" whileTap="tap">
    {children}
  </motion.span>
);

export default PlayerButton;
