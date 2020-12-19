import React from 'react';

import SEO, { SEOProps } from '@/components/atoms/SEO';
// import Layout from '@/components/templates/Layout';

const seoData: SEOProps = {
  title: 'Works',
};

const Works: React.FC = () => {
  return (
    <>
      <SEO {...seoData} />
      <h1>Works</h1>
    </>
  );
};

export default Works;
