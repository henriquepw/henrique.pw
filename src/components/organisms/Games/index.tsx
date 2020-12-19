import React from 'react';

import { Entry } from 'contentful';

import Game, { GameData } from '@/components/molecules/Game';

import { Container } from './styles';

interface GamesProps {
  items: Entry<GameData>[];
}

const Games: React.FC<GamesProps> = ({ items }) => {
  return (
    <Container>
      <h2>GAMES</h2>

      <ul>
        {items.map((game) => (
          <Game key={game.sys.id} item={game.fields} />
        ))}
      </ul>
    </Container>
  );
};

export default Games;
