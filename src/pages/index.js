import React, { useEffect } from 'react';

// import Menu from '~/components/Menu';
import Home from '~/components/Home';
import Layout from '~/components/Layout';

import { Content } from '~/styles';

function IndexPage() {
  useEffect(() => {
    window.addEventListener('keydown', () =>
      document.body.classList.remove('using-mouse')
    );

    window.addEventListener('mousedown', () =>
      document.body.classList.add('using-mouse')
    );
  }, []);

  return (
    <Layout title="Home">
      {/* <Menu /> */}
      <Content>
        <Home />
      </Content>
    </Layout>
  );
}

export default IndexPage;
