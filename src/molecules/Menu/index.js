import React, { useContext, useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { motion, useAnimation } from 'framer-motion';

import SectionsContext from '~/context/sectionsContext';

import { Container, MenuItem } from './styles';

const listAnimation = {
  hidden: {
    x: '100%',
    transition: {
      type: 'spring',
      damping: 15,
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
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
};

const itemAnimation = {
  hidden: {
    y: 40,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      y: { stiffness: 1000, velocity: -100 },
      when: 'afterChildren',
    },
  },
  hover: {
    scale: 1.15,
  },
  tap: {
    scale: 0.95,
  },
};

const textAnimation = {
  hover: {
    opacity: 1,
  },
  show: selected => ({
    opacity: selected ? 1 : 0.7,
    scale: selected ? 1.05 : 1,
  }),
};

function Menu() {
  const controlAnimation = useAnimation();

  const [pressed, setPressed] = useState(true);
  const { sections, selected, setSelectedByName } = useContext(SectionsContext);

  useEffect(() => {
    controlAnimation.start(pressed ? 'show' : 'hidden');
  }, [controlAnimation, pressed]);

  function handlerSelected(event, name) {
    event.preventDefault();

    setSelectedByName(name);
    setPressed(!pressed);

    document.getElementById(name).scrollIntoView();
  }

  return (
    <Container pressed={pressed}>
      <FiMenu size={40} onClick={() => setPressed(!pressed)} />

      <motion.ul
        initial="hidden"
        variants={listAnimation}
        animate={controlAnimation}
      >
        {sections.map(name => (
          <MenuItem
            key={name}
            initial="hidden"
            whileHover="hover"
            whileTap="tap"
            variants={itemAnimation}
            selected={selected === name}
          >
            <motion.a
              href={`#${name}`}
              alt={`Go to the ${name} section`}
              onClick={e => handlerSelected(e, name)}
              custom={selected === name}
              variants={textAnimation}
            >
              {name}
            </motion.a>
          </MenuItem>
        ))}
      </motion.ul>
    </Container>
  );
}

export default React.memo(Menu);
