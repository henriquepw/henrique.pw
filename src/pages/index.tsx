import React from 'react';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import { Asset } from 'contentful';

import { SEOProps } from '@/components/atoms/SEO';

import contentfulClient from '@/services/contentful';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import { Container } from '@/styles/pages/Home';

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
  const { fields } = await contentfulClient.getEntry(SECTIONS_IDS.home, {
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
  const { file } = heroImage.fields;

  return (
    <Container seo={SEO}>
      <div>
        <ReactMarkdown>{title}</ReactMarkdown>
        <ReactMarkdown>{subTitle}</ReactMarkdown>
      </div>
      <div>
        <Image
          src={`https:${file.url}`}
          width={file.details.image.width}
          height={file.details.image.height}
        />
      </div>
    </Container>
  );
};

export default Home;
