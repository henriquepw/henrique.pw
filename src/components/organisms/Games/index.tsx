import ReactMarkdown from 'react-markdown';

import type { Entry } from 'contentful';

import SectionTitle from '@/components/atoms/SectionTitle';
import Game, { GameData } from '@/components/molecules/Game';

import type { SectionData } from '@/interfaces/section';

import { Container, TextContainer } from './styles';

interface GamesProps {
  items: Entry<GameData>[];
  sectionData: SectionData;
}

function Games({ items, sectionData }: GamesProps) {
  return (
    <Container id="games">
      <SectionTitle isRight>{sectionData.title}</SectionTitle>
      <TextContainer>
        <ReactMarkdown>{sectionData.description}</ReactMarkdown>
      </TextContainer>

      <ul>
        {items.map(game => (
          <Game key={game.sys.id} item={game.fields} />
        ))}
      </ul>
    </Container>
  );
}

export default Games;
