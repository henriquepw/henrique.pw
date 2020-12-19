import React from 'react';

import SEO, { SEOProps } from '@/components/atoms/SEO';

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
