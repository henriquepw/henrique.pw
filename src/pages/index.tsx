import React from 'react';

import { GetStaticProps } from 'next';

import contentfulClient from '@/services/contentful';

import { SEOProps } from '@/components/atoms/SEO';

import Layout from '@/components/templates/Layout';

import { formatLocation } from '@/utils/location';

interface HomeProps {
  title: string;
  subTitle: string;
  data: any;
}

const SEO: SEOProps = {
  title: 'Henrique Miranda',
  shouldExcludeTitleSuffix: true,
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await contentfulClient.getEntries({
    content_type: 'games',
    locale: formatLocation(context.locale),
  });

  return {
    props: {
      title: 'Henrique Miranda',
      subTitle: 'Telematcs student, Full Stack Developer & Designer',
      socialList: [{ name: 'github', link: 'https://github.com/henry-ns' }],
      data,
    },
  };
};

const Home: React.FC<HomeProps> = ({ title, subTitle, data }) => {
  console.log(data);

  return (
    <Layout seo={SEO}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </Layout>
  );
};

export default Home;
