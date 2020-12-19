import React from 'react';

import { SEOProps } from '@/components/atoms/SEO';
import Layout from '@/components/templates/Layout';

const seoData: SEOProps = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return (
    <Layout seo={seoData}>
      <h1>Contact</h1>
    </Layout>
  );
};

export default Contact;
