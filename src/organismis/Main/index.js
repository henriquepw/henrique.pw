import React, { useContext, useEffect, useRef /* , useState */ } from 'react';

import Scroll from '~/atoms/Scroll';

import Menu from '~/molecules/Menu';

import About from '~/organismis/About';
import Education from '~/organismis/Education';
import Footer from '~/organismis/Footer';
import Home from '~/organismis/Home';
// import Projects from '~/organismis/Projects';

import Layout from '~/templates/Layout';

import SectionsContext from '~/context/sectionsContext';

import { Content } from '~/styles';

function Main() {
  const { selected } = useContext(SectionsContext);
  const refs = [useRef(null), useRef(null), useRef(null) /* , useRef(null) */];

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
    <Layout title={`${selected} | `}>
      <Scroll refs={refs} />
      <Menu />
      <Content>
        <Home forwardRef={refs[0]} />
        <Education forwardRef={refs[1]} />
        {/* <Projects forwardRef={refs[2]} /> */}
        <About forwardRef={refs[2]} />
        <Footer />
      </Content>
    </Layout>
  );
}

export default Main;
