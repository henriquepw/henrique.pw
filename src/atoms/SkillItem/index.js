import React from 'react';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const textAnimetion = {
  initial: {
    opacity: 0,
    x: '-50%',
    y: -24,
  },
  hover: {
    opacity: 1,
    filter: 'none',
    x: '-50%',
    y: 0,
  },
};

const imageAnimetion = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};

function SkillItem({
  description,
  isEnabled,
  src,
  onTap,
  onHoverEnd,
  onHoverStart,
}) {
  return (
    <motion.li
      key={description}
      onTapStart={onTap}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <motion.img
        initial="initial"
        animate={isEnabled ? 'hover' : 'initial'}
        variants={imageAnimetion}
        src={src}
        alt={description}
      />
      <motion.p
        initial="initial"
        animate={isEnabled ? 'hover' : 'initial'}
        variants={textAnimetion}
      >
        {description}
      </motion.p>
    </motion.li>
  );
}

SkillItem.propTypes = {
  description: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  src: PropTypes.node.isRequired,
  onTap: PropTypes.func.isRequired,
  onHoverEnd: PropTypes.func.isRequired,
  onHoverStart: PropTypes.func.isRequired,
};

export default SkillItem;
