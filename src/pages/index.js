import React, { useEffect, useState } from 'react';

import About from '~/organismis/About';
import Education from '~/organismis/Education';
import Footer from '~/organismis/Footer';
import Home from '~/organismis/Home';
import Menu from '~/organismis/Menu';
import Projects from '~/organismis/Projects';

import Layout from '~/templates/Layout';

import { Content } from '~/styles';

function IndexPage() {
  const [title, setTitle] = useState('Home');

  useEffect(() => {
    window.addEventListener('keydown', () =>
      document.body.classList.remove('using-mouse')
    );

    window.addEventListener('mousedown', () =>
      document.body.classList.add('using-mouse')
    );
  }, []);

  return (
    <Layout title={title}>
      <Menu setTitle={setTitle} />
      <Content>
        <Home />
        <Education />
        <Projects />
        <About />
        <Footer />
      </Content>
    </Layout>
  );
}

export default IndexPage;
