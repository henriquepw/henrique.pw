import React from 'react';

import { SEOProps } from '@/components/atoms/SEO';
import Layout from '@/components/templates/Layout';

const SEO: SEOProps = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return (
    <Layout seo={SEO}>
      <h1>Contact</h1>
    </Layout>
  );
};

export default Contact;
