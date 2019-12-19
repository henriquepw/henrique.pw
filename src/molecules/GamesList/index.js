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
        'Gris é uma esperançosa jovem perdida em seu próprio mundo, lidando com uma experiência dolorosa em sua vida.',
    },
    {
      name: 'Factorio',
      fluid: factorio.sharp.fluid,
      description:
        'Factorio é um jogo sobre a construção e criação de fábricas automatizadas para produzir itens de crescente complexidade, dentro de um mundo 2D infinito.',
    },
    {
      name: 'The Talos Principle',
      fluid: talos.sharp.fluid,
      description:
        'Um jogo filosófico de enigma em primeira pessoa. Resolva uma série de enigmas em uma parábola metafísica sobre a inteligência e sentido em um mundo inevitavelmente condenado.',
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
