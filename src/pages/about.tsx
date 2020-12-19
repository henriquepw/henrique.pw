import React from 'react';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import { Asset, Entry } from 'contentful';

import contentfulClient from '@/services/contentful';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import { Container, MainSection, Title } from '@/styles/pages/about';

interface AboutData {
  name: string;
  title: string;
  description: string;
  heroImage: Asset;
}

interface Game {
  title: string;
  description: string;
  image: Asset;
}

interface AboutProps extends AboutData {
  games?: Entry<Game>[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const aboutPromise = contentfulClient.getEntry(SECTIONS_IDS.about, {
    locale: formatLocation(context.locale),
  });

  const gamesPromise = contentfulClient.getEntries({
    locale: formatLocation(context.locale),
    content_type: 'games',
  });

  const [aboutData, gamesData] = await Promise.all([
    aboutPromise,
    gamesPromise,
  ]);

  const { name, title, description, heroImage } = aboutData.fields as AboutData;

  return {
    props: {
      name,
      title,
      description,
      heroImage,
      games: gamesData.items,
    },
  };
};

const About: React.FC<AboutProps> = ({
  name,
  title,
  description,
  heroImage,
}) => {
  const { file } = heroImage.fields;

  return (
    <Container seo={{ title: name }}>
      <MainSection>
        <div>
          <Title>{title}</Title>
          <div>
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>

        <Image
          src={`https:${file.url}`}
          width={file.details.image.width}
          height={file.details.image.height}
        />
      </MainSection>
    </Container>
  );
};

export default About;
