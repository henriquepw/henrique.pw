import React from 'react';

import { Entry } from 'contentful';

import SectionTitle from '@/components/atoms/SectionTitle';
import Game, { GameData } from '@/components/molecules/Game';

import { SectionData } from '@/interfaces/section';

import { Container, TextContainer } from './styles';

interface GamesProps {
  items: Entry<GameData>[];
  sectionData: SectionData;
}

const Games: React.FC<GamesProps> = ({ items, sectionData }) => {
  return (
    <Container id="games">
      <SectionTitle isRight>{sectionData.title}</SectionTitle>
      <TextContainer>
        <p>{sectionData.description}</p>
      </TextContainer>

      <ul>
        {items.map((game) => (
          <Game key={game.sys.id} item={game.fields} />
        ))}
      </ul>
    </Container>
  );
};

export default Games;
