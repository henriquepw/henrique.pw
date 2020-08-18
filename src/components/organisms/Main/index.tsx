import React, { useEffect, /* useRef, */ useLayoutEffect } from 'react';

// import Scroll from '~/components/atoms/Scroll';

import Menu from '~/components/molecules/Menu';

import About from '~/components/organisms/About';
import Education from '~/components/organisms/Education';
import Footer from '~/components/organisms/Footer';
import Home from '~/components/organisms/Home';
import Projects from '~/components/organisms/Projects';
import Skills from '~/components/organisms/Skills';

import Layout from '~/components/templates/Layout';

import { usePageHeight } from '~/hooks/usePageHeight';

import { Content } from './styles';

const Main: React.FC = () => {
  const { setPageHeight } = usePageHeight();

  /**
   * Set the page height when the window is resized.
   */
  useLayoutEffect(() => {
    setPageHeight(window.innerHeight);

    function setCurrentHeight(): void {
      setPageHeight(window.innerHeight);
    }

    window.addEventListener('resize', setCurrentHeight);

    return () => window.removeEventListener('resize', setCurrentHeight);
  }, [setPageHeight]);

  /**
   * Add event listeners to know when the user uses a mouse.
   * This is use for accessibility.
   */
  useEffect(() => {
    function addUsingMouse(): void {
      document.body.classList.add('using-mouse');
    }

    function removeUsingMouse(): void {
      document.body.classList.remove('using-mouse');
    }

    window.addEventListener('keydown', removeUsingMouse);
    window.addEventListener('mousedown', addUsingMouse);

    return () => {
      window.removeEventListener('keydown', removeUsingMouse);
      window.removeEventListener('mousedown', addUsingMouse);
    };
  }, []);

  return (
    <Layout title={`Home | `}>
      <Menu />
      <Content>
        <Home />
        <Education />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </Content>
    </Layout>
  );
};

export default Main;
