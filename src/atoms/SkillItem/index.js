import React from 'react';

import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

const textAnimetion = {
  initial: {
    opacity: 0,
    x: '-50%',
    y: -24,
  },
  hover: {
    opacity: 1,
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

function SkillItem({ description, src }) {
  const controls = useAnimation();

  return (
    <motion.li
      key={description}
      onHoverStart={() => controls.start('hover')}
      onHoverEnd={() => controls.start('initial')}
    >
      <motion.img
        initial="initial"
        animate={controls}
        variants={imageAnimetion}
        src={src}
        alt={description}
      />
      <motion.p initial="initial" animate={controls} variants={textAnimetion}>
        {description}
      </motion.p>
    </motion.li>
  );
}

SkillItem.propTypes = {
  description: PropTypes.string.isRequired,
  src: PropTypes.node.isRequired,
};

export default SkillItem;
