import styled, { keyframes, css } from 'styled-components';

import { opacify } from 'polished';

import Profile from '~/atoms/Profile';

import { primaryColor } from '~/styles/colors';
import Media from '~/styles/media';
import Section from '~/styles/section';

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
        letter-spacing: ${spacing / 4}px;
        margin-bottom: ${margin}px;
      }
    }
  `;
}

const icon = keyframes`
  0% {
    opacity: 0;
    margin-top: -60px;
    z-index: -1;
  }
  80% {
    opacity: 0;
    margin-top: -60px;
    z-index: -1;
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

const showArrows = keyframes`
  0%,
  70% {
    opacity: 0;
    transform: translate(-50%, -30px);
  }
  to {
    opacity: 1;
  }
`;

const poin = keyframes`
  0%, 50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(10px);
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

export const ProfileImg = styled(Profile)`
  border: 10px solid ${opacify(-0.5, primaryColor.active)};
  box-sizing: border-box;
  margin-top: -40px;
  margin-bottom: 40px;
  width: 160px;
  height: 160px;

  display: none;

  ${Media.hd`
    display: block;
    animation: showup 3s ease-out;
  `}

  ${Media.bigPhone`
    width: 140px;
    height: 140px;
  `}

  @keyframes showup {
    0%,
    70% {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
    }
  }
`;

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

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${icon} 2.5s 1;
  }

  > a {
    display: flex;
    flex-direction: column;
    position: absolute;


    bottom: 0;
    left: 50%;
    width: 80px;

    transform: translateX(-50%);
    animation: ${showArrows} 3s ease-out;

    svg {
      transition: all 0.4s ease;
    }

    svg:nth-child(1) {
      opacity: 0.5;
      stroke-width: 0.9;

      margin-bottom: -68px;
      animation: ${poin} 2.1s infinite ease-out;
      animation-delay: 0.2s;
    }

    svg:nth-child(2) {
      opacity: 0.75;
      stroke-width: 0.9;

      margin-bottom: -68px;
      animation: ${poin} 2.1s infinite ease-out;
      animation-delay: 0.1s;
    }

    svg:nth-child(3) {
      stroke-width: 1;
      animation: ${poin} 2.1s infinite ease-out;
    }

    &:hover {
      color: ${primaryColor.active};

      svg:nth-child(1) {
        transform: translateY(24px);
        animation: ${groupArrow('0px', '24px')} 0.4s 1 ease;
      }

      svg:nth-child(2) {
        transform: translateY(12px);
        animation: ${groupArrow('0px', '12px')} 0.4s 1 ease;
      }

      svg:nth-child(3) {
        transform: translateY(0px);
        animation-name: initial;
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

    ${h1Animation(9, -32)}
  `}

  ${Media.phone`
    h1 {
      letter-spacing: 2px;
      font-size: 2.1rem;
    }

    h2 {
      font-size: 1.15rem;
    }

    h1, h2, ul {
      animation-duration: 2.7s;
    }

    ${h1Animation(6.5)}
  `}

  ${Media.smallPhone`
    h1 {
      letter-spacing: 2px;
      font-size: 1.8rem;
    }

    h2 {
      font-size: 0.9rem;
    }

    ${h1Animation(5, -22)}
  `}
`;

export const Divider = styled.div`
  background-color: ${primaryColor.active};
  height: 1.01px;
  width: 95%;
  max-width: 606px;

  margin: 16px 0px;

  border-radius: 1px;

  ${Media.bigPhone`
    margin: 16px 0;
  `}
`;
