import React from 'react';

import { motion } from 'framer-motion';

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
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

interface SkillItemProps {
  description: string;
  isEnabled: boolean;
  src: string;
  onTap: () => void;
  onHoverEnd: () => void;
  onHoverStart: () => void;
}

const SkillItem: React.FC<SkillItemProps> = ({
  description,
  isEnabled,
  src,
  onTap,
  onHoverEnd,
  onHoverStart,
}) => (
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

export default SkillItem;
