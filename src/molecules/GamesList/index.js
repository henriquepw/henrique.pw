import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Game from '~/atoms/Game';

function GamesList() {
  const { gris, factorio, talos } = useStaticQuery(graphql`
    query {
      gris: file(relativePath: { eq: "games/gris.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      factorio: file(relativePath: { eq: "games/factorio.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      talos: file(relativePath: { eq: "games/the-talos-principle.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const games = [
    {
      name: 'GRIS',
      fluid: gris.sharp.fluid,
      description:
        'Gris is a hopeful young girl lost in her own world, dealing with a painful experience in her life.',
    },
    {
      name: 'Factorio',
      fluid: factorio.sharp.fluid,
      description:
        'Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world.',
    },
    {
      name: 'The Talos Principle',
      fluid: talos.sharp.fluid,
      description:
        'A philosophical puzzle game in a metaphysics parable about the intelligence and meaning on an inevitably doomed world.',
    },
  ];

  return (
    <ol>
      {games.map(item => (
        <Game
          name={item.name}
          description={item.description}
          fluid={item.fluid}
        />
      ))}
    </ol>
  );
}

export default GamesList;
