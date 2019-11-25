import React, { useEffect } from 'react';

import SEO from '~/components/seo';
// import Menu from '~/components/Menu';
import Home from '~/components/Home';

import GlobalStyle from '~/styles/global';
import { Container, Content } from '~/styles';

function IndexPage() {
  useEffect(() => {
    function addClass() {
      document.body.classList.add('using-mouse');
    }

    function removeClass() {
      document.body.classList.remove('using-mouse');
    }

    window.addEventListener('keydown', removeClass);
    window.addEventListener('mousedown', addClass);
  }, []);

  return (
    <Container>
      <SEO title="Home" />
      <GlobalStyle />
      {/* <Menu /> */}
      <Content>
        <Home />
      </Content>
    </Container>
  );
}

export default IndexPage;
