import React from 'react';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import { Asset, Entry } from 'contentful';

import { SEOProps } from '@/components/atoms/SEO';
import SocialList from '@/components/molecules/SocialList';

import contentfulClient from '@/services/contentful';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import { Container } from '@/styles/pages/Home';

interface HomeProps {
  title: string;
  subTitle: string;
  heroImage: Asset;
  socialData: Entry<{
    name: string;
    url: string;
  }>[];
}

const SEO: SEOProps = {
  title: 'Henrique Miranda',
  shouldExcludeTitleSuffix: true,
};

export const getStaticProps: GetStaticProps = async (context) => {
  const homePromise = contentfulClient.getEntry(SECTIONS_IDS.home, {
    locale: formatLocation(context.locale),
  });

  const socialPromise = contentfulClient.getEntries({
    locale: formatLocation(context.locale),
    content_type: 'socialMedia',
  });

  const [{ fields }, socialData] = await Promise.all([
    homePromise,
    socialPromise,
  ]);

  const { title, subTitle, heroImage } = fields as HomeProps;

  return {
    props: {
      title,
      subTitle,
      heroImage,
      socialData: socialData.items,
    },
  };
};

const Home: React.FC<HomeProps> = ({
  title,
  subTitle,
  heroImage,
  socialData,
}) => {
  const { file } = heroImage.fields;

  return (
    <Container seo={SEO}>
      <div>
        <ReactMarkdown>{title}</ReactMarkdown>
        <ReactMarkdown>{subTitle}</ReactMarkdown>
        <SocialList items={socialData} />
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
