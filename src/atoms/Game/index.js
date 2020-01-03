import React from 'react';

import { FluidObject } from 'gatsby-image';
import PropTypes from 'prop-types';

import { Container, Image, Description } from './styles';

function Game({ name, description, fluid }) {
  return (
    <Container>
      <Image fluid={fluid} />
      <Description>
        <h1>{name}</h1>
        <p>{description}</p>
      </Description>
    </Container>
  );
}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fluid: PropTypes.shape(FluidObject).isRequired,
};

export default Game;
