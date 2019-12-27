import React, { useContext, useEffect, useRef, useState } from 'react';

import Menu from '~/molecules/Menu';

import About from '~/organismis/About';
import Education from '~/organismis/Education';
import Footer from '~/organismis/Footer';
import Home from '~/organismis/Home';
import Projects from '~/organismis/Projects';

import Layout from '~/templates/Layout';

import SectionsContext from '~/context/sectionsContext';

import { Content } from '~/styles';

function Main() {
  const [nextSection, setNextSection] = useState(1);
  const { selected, setSelectedByIndex } = useContext(SectionsContext);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    function handleScroll(e) {
      const { scrollY, innerHeight } = window;
      const positionBottom = scrollY + innerHeight * 0.5;

      if (e.deltaY > 0) {
        // scroll down
        if (refs[nextSection] && refs[nextSection].current) {
          if (
            nextSection < refs.length &&
            positionBottom > refs[nextSection].current.offsetTop
          ) {
            setNextSection(nextSection + 1);
            setSelectedByIndex(nextSection);
          }
        }
      } else {
        // scroll up
        const currentSection = nextSection - 1;

        if (refs[currentSection - 1] && refs[currentSection - 1].current) {
          if (
            currentSection > 0 &&
            positionBottom < refs[currentSection].current.offsetTop
          ) {
            setNextSection(nextSection - 1);
            setSelectedByIndex(currentSection - 1);
          }
        }
      }
    }

    function addUsingMouse() {
      document.body.classList.add('using-mouse');
    }

    function removeUsingMouse() {
      document.body.classList.remove('using-mouse');
    }

    window.addEventListener('keydown', removeUsingMouse);
    window.addEventListener('mousedown', addUsingMouse);

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);

      window.removeEventListener('keydown', removeUsingMouse);
      window.removeEventListener('mousedown', addUsingMouse);
    };
  }, [nextSection, refs, setSelectedByIndex]);

  return (
    <Layout title={selected}>
      <Menu />
      <Content>
        <Home forwardRef={refs[0]} />
        <Education forwardRef={refs[1]} />
        <Projects forwardRef={refs[2]} />
        <About forwardRef={refs[3]} />
        <Footer />
      </Content>
    </Layout>
  );
}

export default Main;
