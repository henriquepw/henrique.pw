import React from 'react';

import SEO, { SEOProps } from '@/components/atoms/SEO';

const seoData: SEOProps = {
  title: 'About',
};

const About: React.FC = () => {
  return (
    <>
      <SEO {...seoData} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {[...Array(100)].map((_, index) => (
          <h1 key={index}>About</h1>
        ))}
      </div>
    </>
  );
};

export default About;
