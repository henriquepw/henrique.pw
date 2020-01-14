import React from 'react';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const variants = {
  hover: {
    scale: 1.3,
  },
  tap: {
    scale: 0.95,
  },
};

function PlayerButton({ children }) {
  return (
    <motion.span variants={variants} whileHover="hover" whileTap="tap">
      {children}
    </motion.span>
  );
}

PlayerButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlayerButton;
