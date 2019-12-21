import React from 'react';

import PageTitle from '~/atoms/PageTitle';
import SubTitle from '~/atoms/SubTitle';

import GamesList from '~/molecules/GamesList';
import Player from '~/molecules/Player';

import { Container } from './styles';

function About() {
  return (
    <Container id="about">
      <PageTitle title="About" />
      <p>
        My name is Henrique, you must have seen my name on the main screen,
        I&apos;m from a little town that nobody knows called Montadas, from the
        countryside of Paraíba in Brazil and since I was a little techie, I
        started programming when I entered high school , with my 14 years old
        not knowing where I was getting in, but I ended up liking it and here I
        am writing this.
      </p>
      <p>
        Well, I&apos;ll talk about some things that I like for you to get to
        know me better.
      </p>

      <SubTitle>Games</SubTitle>
      <GamesList />

      <SubTitle>Musics</SubTitle>
      <Player />
    </Container>
  );
}

export default About;
