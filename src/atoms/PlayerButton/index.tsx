import React, { FC } from 'react';

import { motion } from 'framer-motion';

const variants = {
  hover: {
    scale: 1.3,
  },
  tap: {
    scale: 0.95,
  },
};

const PlayerButton: FC = ({ children }) => (
  <motion.span variants={variants} whileHover="hover" whileTap="tap">
    {children}
  </motion.span>
);

export default PlayerButton;
