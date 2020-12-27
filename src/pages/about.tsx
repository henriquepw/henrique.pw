import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import { Asset, Entry } from 'contentful';
import { useTransform, useViewportScroll } from 'framer-motion';

import { GameData } from '@/components/molecules/Game';
import Games from '@/components/organisms/Games';
import Playlist from '@/components/organisms/Playlist';

import contentfulClient from '@/services/contentful';
import { getSpotifyToken, spotifyApi } from '@/services/spotify';

import { useScrollbar } from '@/hooks/useScrollBar';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';
import tryGet from '@/utils/tryGet';

import { SectionData } from '@/interfaces/section';
import { Track } from '@/interfaces/track';

import { Container, MainSection, Title } from '@/styles/pages/about';

interface AboutData {
  name: string;
  title: string;
  description: string;
  heroImage: Asset;
  playlist: Track[];
}

interface AboutProps extends AboutData {
  games: Entry<GameData>[];
  sections: Record<string, SectionData>;
}

async function getSpotifyPlaylist(): Promise<Track[]> {
  await getSpotifyToken();

  const [response, error] = await tryGet(
    spotifyApi.get(`playlists/${process.env.NEXT_SPOTIFY_PLAYLIST_ID}`),
  );

  if (error) return [];

  const tracks: Track[] = response.data.tracks.items.map(({ track }) => ({
    id: track.id,
    name: track.name,
    previewUrl: track.preview_url,
    externalUrl: track.external_urls.spotify,
    artists: track.artists,
    album: {
      image: track.album.images[0],
      externalUrl: track.album.external_urls.spotify,
    },
  }));

  return tracks.filter((track) => track.previewUrl);
}

export const getStaticProps: GetStaticProps = async (context) => {
  const aboutPromise = contentfulClient.getEntry<AboutData>(
    SECTIONS_IDS.about,
    { locale: formatLocation(context.locale) },
  );

  const sectionsPromise = contentfulClient.getEntries<SectionData>({
    locale: formatLocation(context.locale),
    content_type: 'sections',
  });

  const gamesPromise = contentfulClient.getEntries<GameData>({
    locale: formatLocation(context.locale),
    content_type: 'games',
  });

  const [aboutData, gamesData, sectionsData, playlist] = await Promise.all([
    aboutPromise,
    gamesPromise,
    sectionsPromise,
    getSpotifyPlaylist(),
  ]);

  const { name, title, description, heroImage } = aboutData.fields;

  const sections = sectionsData.items.reduce(
    (result, current) => ({
      ...result,
      [current.fields.slug]: current.fields,
    }),
    {} as Record<string, SectionData>,
  );

  return {
    props: {
      name,
      title,
      description,
      heroImage,
      playlist,
      sections,
      games: gamesData.items,
    },
  };
};

const About: React.FC<AboutProps> = ({
  name,
  title,
  description,
  heroImage,
  games,
  playlist,
  sections,
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

      <Games items={games} sectionData={sections.games} />
      <Playlist tracks={playlist} sectionData={sections.musics} />
    </Container>
  );
};

export default About;
