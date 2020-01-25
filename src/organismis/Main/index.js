import React, { useContext, useEffect, useRef, useLayoutEffect } from 'react';

import Scroll from '~/atoms/Scroll';

import Menu from '~/molecules/Menu';

import About from '~/organismis/About';
import Education from '~/organismis/Education';
import Footer from '~/organismis/Footer';
import Home from '~/organismis/Home';
import Projects from '~/organismis/Projects';
import Skills from '~/organismis/Skills';

import Layout from '~/templates/Layout';

import SectionsContext from '~/context/SectionsContext';

import { Content } from './styles';

function Main() {
  const { selected, setPageHeight } = useContext(SectionsContext);
  const sections = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useLayoutEffect(() => {
    setPageHeight(window.innerHeight);

    function setCurrentHeight() {
      setPageHeight(window.innerHeight);
    }

    window.addEventListener('resize', setCurrentHeight);

    return () => {
      window.removeEventListener('resize', setCurrentHeight);
    };
  }, [setPageHeight]);

  useEffect(() => {
    function addUsingMouse() {
      document.body.classList.add('using-mouse');
    }

    function removeUsingMouse() {
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
    <Layout title={`${selected.replace(/\b\w/g, l => l.toUpperCase())} | `}>
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
}

export default Main;
