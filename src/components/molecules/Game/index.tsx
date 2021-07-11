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
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </Content>

      <ImageContainer>
        <Image
          placeholder="blur"
          layout="responsive"
          src={`https:${file.url}`}
          blurDataURL={`https:${file.url}?q=2`}
          width={file.details.image.width}
          height={file.details.image.height}
        />
      </ImageContainer>
    </Container>
  );
};

export default Game;
