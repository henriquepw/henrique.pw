import React from 'react';

import { Entry } from 'contentful';

import SectionTitle from '@/components/atoms/SectionTitle';
import Game, { GameData } from '@/components/molecules/Game';

import { Container } from './styles';

interface GamesProps {
  items: Entry<GameData>[];
}

const Games: React.FC<GamesProps> = ({ items }) => {
  return (
    <Container>
      <SectionTitle isRight>GAMES</SectionTitle>

      <ul>
        {items.map((game) => (
          <Game key={game.sys.id} item={game.fields} />
        ))}
      </ul>
    </Container>
  );
};

export default Games;
