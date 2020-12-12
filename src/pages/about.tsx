import React from 'react';

import { SEOProps } from '@/components/atoms/SEO';
import Layout from '@/components/templates/Layout';

const SEO: SEOProps = {
  title: 'About',
};

const About: React.FC = () => {
  return (
    <Layout seo={SEO}>
      <h1>About</h1>
    </Layout>
  );
};

export default About;
