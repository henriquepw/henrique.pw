import React from 'react';

import PageTitle from '~/atoms/PageTitle';
import SubTitle from '~/atoms/SubTitle';

import GamesList from '~/molecules/GamesList';

import { Container } from './styles';

function About() {
  return (
    <Container id="about">
      <PageTitle title="About" />
      <p>
        Eu me chamo Henrique, você deve ter visto o meu nome na tela principal,
        eu sou de uma cidadezinha que ninguém conhece chamado Montadas, do
        interior da Paraíba no Brasil e desde pequeno que eu gosto de
        tecnologia, comecei a programar quando entrei no ensino médio, com meu
        14 anos sem saber onde estava se metendo, mas acabei gostando e aqui
        estou escrevendo essa portifolio.
      </p>
      <p>
        Bem, vou falar de algumas coisa que eu gosto para você me conhecerem
        melhor.
      </p>

      <SubTitle>Games</SubTitle>
      <GamesList />

      <SubTitle>Musics</SubTitle>
    </Container>
  );
}

export default About;
