import React, { useMemo } from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Game from '~/components/atoms/Game';

const GamesList: React.FC = () => {
  const { gris, factorio, talos } = useStaticQuery(graphql`
    query {
      gris: file(relativePath: { eq: "games/gris.jpg" }) {
        sharp: childImageSharp {
          fluid(maxHeight: 200, maxWidth: 417, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      factorio: file(relativePath: { eq: "games/factorio.jpg" }) {
        sharp: childImageSharp {
          fluid(maxHeight: 200, maxWidth: 417, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      talos: file(relativePath: { eq: "games/the-talos-principle.jpg" }) {
        sharp: childImageSharp {
          fluid(maxHeight: 200, maxWidth: 417, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const games = useMemo(
    () => [
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
    ],
    [factorio.sharp.fluid, gris.sharp.fluid, talos.sharp.fluid],
  );

  return (
    <ol>
      {games.map((item) => (
        <Game
          key={item.name}
          name={item.name}
          description={item.description}
          fluid={item.fluid}
        />
      ))}
    </ol>
  );
};

export default GamesList;
