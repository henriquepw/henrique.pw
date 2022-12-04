import { FiArrowDown } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import type { Asset, Entry } from 'contentful';

import type { SEOProps } from '@/components/atoms/SEO';
import type { GameData } from '@/components/molecules/Game';
import Games from '@/components/organisms/Games';
import Playlist from '@/components/organisms/Playlist';

import contentfulApi from '@/services/contentful';
import { getSpotifyPlaylist } from '@/services/spotify';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import type { SectionData } from '@/interfaces/section';
import type { Track } from '@/interfaces/track';

import { Container, MainSection, Title } from '@/styles/pages/about';

interface AboutData {
  name: string;
  title: string;
  description: string;
  heroImage: Asset;
  playlist: Track[];
}

interface AboutProps extends Omit<AboutData, 'name'> {
  games: Entry<GameData>[];
  sections: Record<string, SectionData>;
  SEO: SEOProps;
}

function About({
  SEO,
  title,
  description,
  heroImage,
  games,
  playlist,
  sections,
}: AboutProps) {
  const { file } = heroImage.fields;

  function goToNextSection(): void {
    if (typeof window === 'undefined') return;

    const gamesRef = document.getElementById('games');
    gamesRef?.scrollIntoView();
  }

  return (
    <Container seo={SEO} id="about">
      <MainSection>
        <div>
          <FiArrowDown size={40} onClick={goToNextSection} />
          <Title>{title}</Title>
          <div>
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>

        <Image
          placeholder="blur"
          alt={file.fileName}
          src={`https:${file.url}`}
          blurDataURL={`https:${file.url}?q=2`}
          width={file.details.image?.width}
          height={file.details.image?.height}
        />
      </MainSection>

      <Games items={games} sectionData={sections.games} />
      <Playlist tracks={playlist} sectionData={sections.musics} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const aboutPromise = contentfulApi.getEntry<AboutData>(SECTIONS_IDS.about, {
    locale: formatLocation(context.locale),
  });

  const sectionsPromise = contentfulApi.getEntries<SectionData>({
    locale: formatLocation(context.locale),
    content_type: 'sections',
  });

  const gamesPromise = contentfulApi.getEntries<GameData>({
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

  const SEO: SEOProps = {
    title: name,
  };

  return {
    props: {
      SEO,
      title,
      description,
      heroImage,
      playlist,
      sections,
      games: gamesData.items,
    },
  };
};

export default About;
