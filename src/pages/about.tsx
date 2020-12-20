import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import { Asset, Entry } from 'contentful';

import { GameData } from '@/components/molecules/Game';
import Games from '@/components/organisms/Games';
import Playlist from '@/components/organisms/Playlist';

import contentfulClient from '@/services/contentful';
import { getSpotifyToken, spotifyApi } from '@/services/spotify';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import { Container, MainSection, Title } from '@/styles/pages/about';

interface AboutData {
  name: string;
  title: string;
  description: string;
  heroImage: Asset;
  acessToken: string;
}

interface AboutProps extends AboutData {
  games?: Entry<GameData>[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const aboutPromise = contentfulClient.getEntry(SECTIONS_IDS.about, {
    locale: formatLocation(context.locale),
  });

  const gamesPromise = contentfulClient.getEntries({
    locale: formatLocation(context.locale),
    content_type: 'games',
  });

  const [aboutData, gamesData, acessToken] = await Promise.all([
    aboutPromise,
    gamesPromise,
    getSpotifyToken(),
  ]);

  const { name, title, description, heroImage } = aboutData.fields as AboutData;

  return {
    props: {
      name,
      title,
      description,
      heroImage,
      games: gamesData.items,
      acessToken,
    },
  };
};

const About: React.FC<AboutProps> = ({
  name,
  title,
  description,
  heroImage,
  games,
  acessToken,
}) => {
  const { file } = heroImage.fields;

  useEffect(() => {
    async function getPlaylist() {
      spotifyApi.defaults.headers.Authorization = acessToken;
      const response = await spotifyApi.get('playlists/37i9dQZF1DZ06evO2T8209');
      console.log(response.data);
    }

    getPlaylist();
  }, []);

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

      <Games items={games} />
      <Playlist />
    </Container>
  );
};

export default About;
