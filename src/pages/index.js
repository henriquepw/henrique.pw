import React from 'react';

import SEO from '~/components/seo';
// import Menu from '~/components/Menu';
import Home from '~/components/Home';

import GlobalStyle from '~/styles/global';
import { Container, Content } from './styles';

function IndexPage() {
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
