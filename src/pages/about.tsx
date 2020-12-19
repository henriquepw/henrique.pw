import React from 'react';

import SEO, { SEOProps } from '@/components/atoms/SEO';
// import Layout from '@/components/templates/Layout';

const seoData: SEOProps = {
  title: 'About',
};

const About: React.FC = () => {
  return (
    <>
      <SEO {...seoData} />
      <h1>About</h1>
    </>
  );
};

export default About;
