import React from 'react';

import SEO, { SEOProps } from '@/components/atoms/SEO';
// import Layout from '@/components/templates/Layout';

const seoData: SEOProps = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return (
    <>
      <SEO {...seoData} />
      <h1>Contact</h1>
    </>
  );
};

export default Contact;
