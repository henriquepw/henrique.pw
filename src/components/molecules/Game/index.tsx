import React from 'react';

import Image from 'next/image';

import { Asset } from 'contentful';

import { Container, Content, ImageContainer } from './styles';

export interface GameData {
  title: string;
  description: string;
  image: Asset;
}

interface GameProps {
  item: GameData;
}

const Game: React.FC<GameProps> = ({ item }) => {
  const { file } = item.image.fields;

  return (
    <Container>
      <Content>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </Content>

      <ImageContainer>
        <Image
          src={`https:${file.url}`}
          width={file.details.image.width}
          height={file.details.image.height}
        />
      </ImageContainer>
    </Container>
  );
};

export default Game;
