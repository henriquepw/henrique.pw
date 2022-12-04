import Image from 'next/image';

import type { Asset } from 'contentful';

import { Container, Content, ImageContainer } from './styles';

export interface GameData {
  title: string;
  description: string;
  image: Asset;
}

interface GameProps {
  item: GameData;
}

function Game({ item }: GameProps) {
  const { file } = item.image.fields;

  return (
    <Container>
      <Content>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </Content>

      <ImageContainer>
        <Image
          alt={item.title}
          placeholder="blur"
          layout="responsive"
          src={`https:${file.url}`}
          blurDataURL={`https:${file.url}?q=2`}
          width={file.details.image?.width}
          height={file.details.image?.height}
        />
      </ImageContainer>
    </Container>
  );
}

export default Game;
