import styled, { keyframes, css } from 'styled-components';

import Media from '~/styles/media';
import { primaryColor } from '~/styles/colors';

function h1Animation(spacing = 15, margin = -50) {
  return css`
    @keyframes name {
      0% {
        margin-bottom: ${margin}px;
      }
      30% {
        letter-spacing: ${spacing}px;
        margin-bottom: ${margin}px;
      }
      80% {
        letter-spacing: ${spacing / 3}px;
        margin-bottom: ${margin}px;
      }
    }
  `;
}

const icon = keyframes`
  0% {
    opacity: 0;
    margin-top: -60px;
  }
  80% {
    opacity: 0;
    margin-top: -60px;
  }
`;

const description = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  strong {
    display: inline;
    color: ${primaryColor.active};
  }

  h1,
  h2 {
    text-align: center;
    transition: 0.4s;
  }

  h1 {
    font-family: Patua One, cursive;
    font-size: 3em;
    letter-spacing: 7px;
    padding-bottom: 10px;
    animation: name 3s 1;
  }

  h2 {
    font-size: 1.5em;
    font-weight: normal;
    animation: ${description} 3s 1;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${icon} 3s 1;
  }

  div {
    background-color: ${primaryColor.active};
    height: 1px;
    width: 100%;
    max-width: 650px;

    margin: 20px 0;

    border-radius: 1px;
  }

  ${h1Animation(15)}

  ${Media.smallTablet`
    h1 {
      font-size: 2.8em;
    }

    h2 {
      font-size: 1.4em;
    }

    ${h1Animation(10)}
  `}

  ${Media.bigPhone`
    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 1.3em;
    }

    ${h1Animation(9)}
  `}

  ${Media.phone`
    h1 {
      letter-spacing: 2px;
      font-size: 2em;
    }

    h2 {
      font-size: 1em;
    }

    h1, h2, ul {
      animation-duration: 2.7s;
    }

    div {
      margin: 15px 0;
    }

    ${h1Animation(6.5, -40)}
  `}

  ${Media.smallPhone`
    h1 {
      letter-spacing: 2px;
      font-size: 1.8em;
    }

    h2 {
      font-size: 0.9em;
    }

    ${h1Animation(5, -40)}
  `}
`;
