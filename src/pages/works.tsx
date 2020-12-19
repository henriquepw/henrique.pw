import React from 'react';

import { SEOProps } from '@/components/atoms/SEO';
import Layout from '@/components/templates/Layout';

const seoData: SEOProps = {
  title: 'Works',
};

const Works: React.FC = () => {
  return (
    <Layout seo={seoData}>
      <h1>Works</h1>
    </Layout>
  );
};

export default Works;
