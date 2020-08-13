import React, { useEffect, useRef, useLayoutEffect } from 'react';

import Scroll from '~/components/atoms/Scroll';

import Menu from '~/components/molecules/Menu';

import About from '~/components/organisms/About';
import Education from '~/components/organisms/Education';
import Footer from '~/components/organisms/Footer';
import Home from '~/components/organisms/Home';
import Projects from '~/components/organisms/Projects';
import Skills from '~/components/organisms/Skills';

import Layout from '~/components/templates/Layout';

import { useSections } from '~/hooks/sections';

import { Content } from './styles';

const Main: React.FC = () => {
  const { selected, setPageHeight } = useSections();
  const sections = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useLayoutEffect(() => {
    setPageHeight(window.innerHeight);

    function setCurrentHeight(): void {
      setPageHeight(window.innerHeight);
    }

    window.addEventListener('resize', setCurrentHeight);

    return () => {
      window.removeEventListener('resize', setCurrentHeight);
    };
  }, [setPageHeight]);

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
    <Layout
      title={`${selected.replace(/\b\w/g, (l: string) => l.toUpperCase())} | `}
    >
      <Scroll refs={sections} />
      <Menu />
      <Content>
        <Home ref={sections[0]} />
        <Education ref={sections[1]} />
        <Skills ref={sections[2]} />
        <Projects ref={sections[3]} />
        <About ref={sections[4]} />
        <Footer />
      </Content>
    </Layout>
  );
};

export default Main;
