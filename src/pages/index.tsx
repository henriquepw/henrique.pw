import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Asset, Entry } from 'contentful';

import { SEOProps } from '@/components/atoms/SEO';
import SocialList from '@/components/molecules/SocialList';

import contentfulClient from '@/services/contentful';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import { Container, Button } from '@/styles/pages/home';

interface HomeProps {
  title: string;
  subTitle: string;
  actionText: string;
  heroImage: Asset;
  socialData: Entry<{
    name: string;
    url: string;
  }>[];
}

const seoData: SEOProps = {
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

  type Fields = HomeProps & { description: string };

  const { title, subTitle, heroImage, description } = fields as Fields;

  return {
    props: {
      title,
      subTitle,
      heroImage,
      socialData: socialData.items,
      actionText: description,
    },
  };
};

const Home: React.FC<HomeProps> = ({
  title,
  subTitle,
  heroImage,
  actionText,
  socialData,
}) => {
  const { file } = heroImage.fields;

  return (
    <Container seo={seoData}>
      <div>
        <ReactMarkdown>{title}</ReactMarkdown>
        <ReactMarkdown>{subTitle}</ReactMarkdown>
        <SocialList items={socialData} />
        <Link href="/works">
          <Button>
            {actionText}
            <FiArrowRight size={24} />
          </Button>
        </Link>
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
