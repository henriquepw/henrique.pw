import styled, { css, keyframes } from 'styled-components';

import { lighten } from 'polished';

import Profile from '~/atoms/Profile';

import { primaryColor, secundaryColor } from '~/styles/colors';
import Media, { width } from '~/styles/media';

/**
 * Animations
 */
const showUp = (invisibleTo = 70) => keyframes`
  0%,
  ${invisibleTo}% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
  }
`;

const slideToRight = keyframes`
  0%,
  60% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

/**
 * Components styles
 */
export const ProfileImg = styled(Profile)`
  border: 10px solid ${lighten(0.12, primaryColor.active)};
  animation: ${showUp()} 3s 1 ease;

  &::after {
    border: 1px solid ${lighten(0.12, primaryColor.active)};
  }

  ${Media.hd`
    display: none;
  `}
`;

export const MenuItem = styled.li`
  transition: 0.2s;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }

  a {
    font-size: 1.5rem;
    text-transform: capitalize;
    color: ${secundaryColor.text};
  }

  ${({ selected }) =>
    selected &&
    css`
      opacity: 1;
      font-weight: 400;
      transform: scale(1.05);
    `}

  ${Media.hd`
    a {
      font-size: 2rem;
    }
  `}
`;

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  z-index: 5;

  top: 0;
  left: 0;
  position: fixed;

  width: 256px;
  height: 100%;
  background-color: ${primaryColor.active};

  *::selection {
    background-color: ${primaryColor.text};
  }

  svg {
    display: none;
    stroke-width: 1;
    -webkit-tap-highlight-color: transparent;
  }

  ul,
  img {
    pointer-events: all;
  }

  ul {
    margin: 96px 0;
    animation: ${showUp()} 3s 1;
  }

  li + li {
    margin-top: 32px;
  }

  @media (min-width: ${width.hd}px) {
    animation: ${slideToRight} 2s 1 ease-out;
  }

  ${Media.hd`
    top: 0;
    right: 0;
    left: auto;

    width: 0;
    transition: 1s ease-in-out;

    svg {
      display: block;
      position: absolute;

      top: 20px;
      right: 20px;

      transition: 1s ease-in-out;
      cursor: pointer;

      line {
        transition: 0.5s ease-out;
      }

      &:hover {
        line {
          color: ${primaryColor.active};
        }
      }
    }

    ul,
    img {
      pointer-events: none;
    }

    ul {
      opacity: 0;
      animation: none;
    }

    ${({ pressed }) =>
      pressed &&
      css`
        width: 40%;

        svg {
          transform: rotate(180deg);

          line {
            color: ${secundaryColor.text};
          }

          &:hover {
            line {
              color: ${secundaryColor.text};
            }
          }

          line:nth-child(1) {
            opacity: 0;
          }

          line:not(:nth-child(1)) {
            transform-origin: center;
            transform-box: fill-box;
          }

          line:nth-child(2) {
            transform: translateY(6px) rotateZ(-45deg);
          }

          line:nth-child(3) {
            transform: translateY(-6px) rotateZ(45deg);
          }
        }

        ul {
          opacity: 1;
          animation: ${showUp(60)} 1.5s 1 ease-out;
          pointer-events: all;

          * {
            color: ${secundaryColor.text};
          }
        }
      `}
  `}

  ${Media.smallTablet`
    ${({ pressed }) =>
      pressed &&
      css`
        width: 100%;
      `}
  `}
`;
