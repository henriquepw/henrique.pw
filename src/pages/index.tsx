import React from 'react';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import contentfulClient from '@/services/contentful';
import { Asset } from 'contentful';

import { SEOProps } from '@/components/atoms/SEO';

import Layout from '@/components/templates/Layout';

import { formatLocation } from '@/utils/location';

interface HomeProps {
  title: string;
  subTitle: string;
  heroImage: Asset;
}

const SEO: SEOProps = {
  title: 'Henrique Miranda',
  shouldExcludeTitleSuffix: true,
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { fields } = await contentfulClient.getEntry('2wkBThk2SvuvNLP8wxgjo0', {
    locale: formatLocation(context.locale),
  });

  const { title, subTitle, heroImage } = fields as HomeProps;

  return {
    props: {
      title,
      subTitle,
      heroImage,
    },
  };
};

const Home: React.FC<HomeProps> = ({ title, subTitle, heroImage }) => {
  const imageFile = heroImage.fields.file;

  return (
    <Layout seo={SEO}>
      <div>
        <ReactMarkdown>{title}</ReactMarkdown>
        <ReactMarkdown>{subTitle}</ReactMarkdown>
      </div>
      <Image
        src={`https:${imageFile.url}`}
        width={imageFile.details.image.width}
        height={imageFile.details.image.height}
      />
    </Layout>
  );
};

export default Home;
