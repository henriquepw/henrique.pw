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

import { Content } from './styles';

const Main: React.FC = () => {
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
