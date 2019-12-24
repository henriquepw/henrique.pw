import React, { useEffect, useState, useRef } from 'react';

import About from '~/organismis/About';
import Education from '~/organismis/Education';
import Footer from '~/organismis/Footer';
import Home from '~/organismis/Home';
import Menu from '~/organismis/Menu';
import Projects from '~/organismis/Projects';

import Layout from '~/templates/Layout';

import { Content } from '~/styles';

function IndexPage() {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [title, setTitle] = useState('Home');
  const [nextSection, setNextSection] = useState(1);

  useEffect(() => {
    function handleScroll(e) {
      const { scrollY, innerHeight } = window;
      const positionBottom = scrollY + innerHeight * 0.5;
      const { log } = console;

      if (e.deltaY > 0) {
        // scroll down
        if (refs[nextSection] && refs[nextSection].current) {
          if (
            nextSection < refs.length &&
            positionBottom > refs[nextSection].current.offsetTop
          ) {
            setNextSection(nextSection + 1);
            // set selected section
            // window.scrollTo(0, refs[nextSection].current.offsetTop);
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
            // set selected section
            // window.scrollTo(0, refs[currentSection - 1].current.offsetTop);
          }
        }
      }
    }

    window.addEventListener('keydown', () =>
      document.body.classList.remove('using-mouse')
    );

    window.addEventListener('mousedown', () =>
      document.body.classList.add('using-mouse')
    );

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('keydown', () =>
        document.body.classList.remove('using-mouse')
      );

      window.removeEventListener('mousedown', () =>
        document.body.classList.add('using-mouse')
      );

      window.removeEventListener('wheel', handleScroll);
    };
  }, [nextSection, refs]);

  return (
    <Layout title={title}>
      <Menu setTitle={setTitle} />
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

export default IndexPage;
