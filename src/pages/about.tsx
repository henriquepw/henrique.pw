import React from 'react';
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
import tryGet from '@/utils/tryGet';

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
  games?: Entry<GameData>[];
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
  const aboutPromise = contentfulClient.getEntry(SECTIONS_IDS.about, {
    locale: formatLocation(context.locale),
  });

  const gamesPromise = contentfulClient.getEntries({
    locale: formatLocation(context.locale),
    content_type: 'games',
  });

  const [aboutData, gamesData, playlist] = await Promise.all([
    aboutPromise,
    gamesPromise,
    getSpotifyPlaylist(),
  ]);

  const { name, title, description, heroImage } = aboutData.fields as AboutData;

  return {
    props: {
      name,
      title,
      description,
      heroImage,
      games: gamesData.items,
      playlist,
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

      <Games items={games} />
      <Playlist tracks={playlist} />
    </Container>
  );
};

export default About;
