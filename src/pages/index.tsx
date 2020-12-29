import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Asset } from 'contentful';
import { motion } from 'framer-motion';

import { SEOProps } from '@/components/atoms/SEO';
import SocialList, { SocialMedia } from '@/components/molecules/SocialList';

import contentfulApi from '@/services/contentful';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import { fadeInUp, scaleYInOut, stagger } from '@/animations/global';
import { dividerTransition, imageVariants } from '@/animations/home';

import { Container, Button, Divider } from '@/styles/pages/home';

interface HomeProps {
  title: string;
  subTitle: string;
  actionText: string;
  heroImage: Asset;
  socialData: SocialMedia[];
}

const seoData: SEOProps = {
  title: 'Henrique Miranda',
  shouldExcludeTitleSuffix: true,
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
      <motion.div variants={stagger} initial="initial" animate="animate">
        <div>
          <ReactMarkdown
            renderers={{
              heading: ({ children }) => (
                <motion.h1 variants={fadeInUp}>{children}</motion.h1>
              ),
            }}
          >
            {title}
          </ReactMarkdown>
        </div>

        <div>
          <ReactMarkdown
            renderers={{
              heading: ({ children }) => (
                <motion.h2 variants={fadeInUp}>{children}</motion.h2>
              ),
            }}
          >
            {subTitle}
          </ReactMarkdown>
        </div>

        <SocialList items={socialData} />

        <Link href="/works">
          <Button variants={fadeInUp}>
            {actionText}
            <FiArrowRight size={24} />
          </Button>
        </Link>
      </motion.div>

      <Divider
        variants={scaleYInOut}
        transition={dividerTransition}
        initial="initial"
        animate="animate"
      />

      <motion.div variants={imageVariants} initial="initial" animate="animate">
        <Image
          src={`https:${file.url}`}
          width={file.details.image.width}
          height={file.details.image.height}
        />
      </motion.div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const homePromise = contentfulApi.getEntry(SECTIONS_IDS.home, {
    locale: formatLocation(context.locale),
  });

  const socialPromise = contentfulApi.getEntries({
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

export default Home;
