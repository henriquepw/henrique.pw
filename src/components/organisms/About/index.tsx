import React, { forwardRef, RefObject, useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

import SubTitle from '~/components/atoms/SubTitle';
import Title from '~/components/atoms/Title';

import GamesList from '~/components/molecules/GamesList';
import Player from '~/components/molecules/Player';

import { Container } from './styles';

const animationVariants = {
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
  hidden: (delay: 0 | 0.3 = 0) => ({
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3 - delay,
    },
  }),
};

const About = forwardRef<HTMLElement>((_, ref) => {
  const animationControls = useAnimation();

  useEffect(() => {
    function onVisible([elem]: IntersectionObserverEntry[]): void {
      animationControls.start(elem.isIntersecting ? 'visible' : 'hidden');
    }

    const observer = new IntersectionObserver(onVisible, {
      rootMargin: '0px 0px -50% 0px',
    });

    const { current } = ref as RefObject<HTMLElement>;

    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, [animationControls, ref]);

  return (
    <Container id="about" ref={ref}>
      <Title>About</Title>
      <motion.p
        custom={0.4}
        animate={animationControls}
        variants={animationVariants}
      >
        My name is Henrique, you must have seen my name on the main screen,
        I&apos;m from a little town that nobody knows called Montadas, from the
        countryside of Paraíba in Brazil and since I was a little techie, I
        started programming when I entered high school , with my 14 years old
        not knowing where I was getting in, but I ended up liking it and here I
        am writing this.
      </motion.p>
      <motion.p
        custom={0.8}
        animate={animationControls}
        variants={animationVariants}
      >
        Well, I&apos;ll talk about some things that I like for you to get to
        know me better.
      </motion.p>

      <SubTitle>Games</SubTitle>
      <GamesList />

      <SubTitle>Musics</SubTitle>
      <Player />
    </Container>
  );
});

export default React.memo(About);
