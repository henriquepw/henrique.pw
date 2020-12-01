import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { motion, useAnimation } from 'framer-motion';

import { Container, MenuItem } from './styles';

const listAnimationVariants = {
  show: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.07,
    },
  },
  hide: {
    x: '100%',
    transition: {
      type: 'spring',
      damping: 15,
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const ListItemAnimationVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      when: 'afterChildren',
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hide: {
    y: 40,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  hover: { scale: 1.15 },
  tap: { scale: 0.95 },
};

const sections = ['home', 'education', 'skills', 'projects', 'about'];

const Menu: React.FC = () => {
  const animationControls = useAnimation();

  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    animationControls.start(pressed ? 'show' : 'hide');
  }, [animationControls, pressed]);

  function handlerSelected(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    name: string,
  ): void {
    event.preventDefault();

    setPressed(!pressed);

    return document.getElementById(name)?.scrollIntoView();
  }

  function handleBurgerClick(): void {
    setPressed(!pressed);
  }

  return (
    <Container pressed={pressed}>
      <FiMenu size={40} onClick={handleBurgerClick} />

      <motion.ul
        initial="hide"
        variants={listAnimationVariants}
        animate={animationControls}
      >
        {sections.map((name: string) => (
          <MenuItem
            key={name}
            initial="hide"
            whileHover="hover"
            whileTap="tap"
            variants={ListItemAnimationVariants}
            // selected={selected === name}
          >
            <motion.a
              href={`#${name}`}
              onClick={(event) => handlerSelected(event, name)}
            >
              {name}
            </motion.a>
          </MenuItem>
        ))}
      </motion.ul>
    </Container>
  );
};

export default React.memo(Menu);
