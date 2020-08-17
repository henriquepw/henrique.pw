import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { motion, useAnimation } from 'framer-motion';

import { Container, MenuItem } from './styles';

const listAnimation = {
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
    y: 40,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const itemAnimation = {
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
  const controlAnimation = useAnimation();

  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    controlAnimation.start(pressed ? 'show' : 'hide');
  }, [controlAnimation, pressed]);

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
        variants={listAnimation}
        animate={controlAnimation}
      >
        {sections.map((name: string) => (
          <MenuItem
            key={name}
            initial="hide"
            whileHover="hover"
            whileTap="tap"
            variants={itemAnimation}
            // selected={selected === name}
          >
            <motion.a
              href={`#${name}`}
              onClick={(e) => handlerSelected(e, name)}
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
