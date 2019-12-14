import React, { useEffect, useState } from 'react';

import Menu from '~/organismis/Menu';
import Home from '~/organismis/Home';
import Education from '~/organismis/Education';
import Projects from '~/organismis/Projects';
import About from '~/organismis/About';

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
      </Content>
    </Layout>
  );
}

export default IndexPage;
