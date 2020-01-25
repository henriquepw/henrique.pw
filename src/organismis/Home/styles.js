import styled, { css, keyframes } from 'styled-components';

import { primaryColor } from '~/styles/colors';
import Media from '~/styles/media';
import Section from '~/styles/section';

/**
 * Animations
 */
const h1Animation = (spacing = 15, margin = 50) => css`
  @keyframes name {
    0% {
      transform: translateY(${margin}px);
    }
    30% {
      letter-spacing: ${spacing}px;
      transform: translateY(${margin}px);
    }
    80% {
      letter-spacing: ${spacing / 4}px;
      transform: translateY(${margin}px);
    }
  }
`;

const description = keyframes`
  0%,
  80% {
    opacity: 0;
  }
`;

const showArrows = keyframes`
  0%,
  70% {
    opacity: 0;
    transform: translate(-50%, -30px);
  }
  100% {
    opacity: 1;
  }
`;

const poin = keyframes`
  0%,
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const groupArrow = (from, to) => keyframes`
  from {
    transform: translateY(${from});
  }
  to {
    transform: translateY(${to});
  }
`;

/**
 * Components styles
 */

export const Container = styled(Section)`
  justify-content: center;
  min-height: ${({ height }) => (height ? `${height}px` : '100vh')};

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
    font-size: 3rem;
    letter-spacing: 6px;
    padding-bottom: 16px;
    animation: name 2.5s 1;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 300;
    animation: ${description} 2.5s 1;
  }

  > a {
    display: flex;
    flex-direction: column;
    position: absolute;

    bottom: 8px;
    left: 50%;
    width: 60px;

    transform: translateX(-50%);
    animation: ${showArrows} 3s ease-out;

    &:focus {
      outline: 3px solid ${primaryColor.active};
      outline-offset: 3px;
    }

    svg {
      transition: all 0.4s ease;
      stroke-width: 0.8;

      polyline {
        animation: ${poin} 2.1s infinite ease-out;

        &:nth-child(1) {
          opacity: 0.5;
          animation-delay: 0.2s;
        }

        &:nth-child(2) {
          opacity: 0.7;
          animation-delay: 0.1s;
        }
      }
    }

    &:hover {
      color: ${primaryColor.active};

      svg polyline {
        &:nth-child(1) {
          transform: translateY(10px);
          animation: ${groupArrow('0px', '10px')} 0.4s 1 ease;
        }

        &:nth-child(2) {
          transform: translateY(5px);
          animation: ${groupArrow('0px', '5px')} 0.4s 1 ease;
        }

        &:nth-child(3) {
          transform: translateY(0px);
          animation-name: initial;
        }
      }
    }
  }

  ${h1Animation(15)}

  ${Media.smallTablet`
    h1 {
      font-size: 2.8rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    ${h1Animation(12)}
  `}

  ${Media.bigPhone`
    min-height: 95vh;

    > a {
      transform: translate(-50%, -30%);
    }

    > a,
    > a svg {
      width: 60px;
    }

    h1 {
      font-size: 2.6rem;
      padding-bottom: 8px;
    }

    h2 {
      font-size: 1.35rem;
    }

    ${h1Animation(9, 32)}
  `}

  ${Media.phone`
    h1 {
      letter-spacing: 2px;
      font-size: 2.1rem;
    }

    h2 {
      font-size: 1.15rem;
    }

    h1,
    h2,
    ul {
      animation-duration: 2.7s;
    }

    ${h1Animation(6.5, 40)}
  `}

  ${Media.smallPhone`
    h1 {
      letter-spacing: 2px;
      font-size: 1.8rem;
    }

    h2 {
      font-size: 0.9rem;
    }

    ${h1Animation(5, 22)}
  `}
`;

export const Divider = styled.div`
  background-color: ${primaryColor.active};

  height: 1.01px;
  width: 95%;
  max-width: 606px;

  margin: 16px auto;
  border-radius: 1px;

  ${Media.bigPhone`
    margin: 8px 0;
  `}
`;
