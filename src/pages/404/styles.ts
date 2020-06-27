import styled, { keyframes, Keyframes } from 'styled-components';

import { Link } from 'gatsby';

import Layout from '~/templates/Layout';

import button from '~/styles/button';
import { primaryColor } from '~/styles/colors';
import Media from '~/styles/media';

const slider = (x = '0', y = '0'): Keyframes => keyframes`
  0% {
    opacity: 0;
    transform: translate(${x}, ${y});
  }
  50% {
    opacity: 0.3;
  }
`;

export const Container = styled(Layout)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 100vh;
  width: 100%;
  margin: auto;

  h1,
  h2,
  h3,
  span {
    font-weight: 300;
    transition: 0.2s;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 20em;
      color: ${primaryColor.active};
      animation: _404 1.1s 1 ease-out;

      letter-spacing: 10px;
      user-select: none;

      span {
        letter-spacing: normal;
      }
    }

    h2 {
      position: absolute;
      font-size: 2em;
      left: 50%;
      bottom: 0;
      transform: translate(-38%, -65%);
      animation: ${slider('-34.5%', '120%')} 1.3s 1 ease-out;
    }
  }

  h3 {
    font-size: 3.2em;
    margin-bottom: 7em;
    animation: ${slider('-0.5em')} 1.3s 1 ease-out;
  }

  @keyframes _404 {
    0% {
      opacity: 0;
      letter-spacing: 0.5em;
    }
  }

  ${Media.tablet`
    h3 {
      font-size: 2.4em;
      margin-bottom: 5.25em;
    }

    main {
      h1 {
        font-size: 15em;
      }

      h2 {
        font-size: 1.45em;
      }
    }
  `}

  ${Media.phone`
    h3 {
      font-size: 2.1em;
    }

    main {
      h1 {
        font-size: 12em;
      }

      h2 {
        font-size: 1.2em;
      }
    }

    @keyframes _404 {
      0% {
        opacity: 0;
        letter-spacing: 0.3em;
      }
    }
  `}

  ${Media.phone`
    h3 {
      font-size: 2em;
    }

    main {
      h1 {
        font-size: 11em;
      }

      h2 {
        font-size: 1.05em;
        transform: translate(-38%, -75%);
      }
    }
  `}
`;

export const Button = styled(Link)`
  ${button}
`;
