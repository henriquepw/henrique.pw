import styled, { css } from 'styled-components';

import Profile from '~/atoms/Profile';

import { primaryColor, secundaryColor } from '~/styles/colors';
import Media from '~/styles/media';

export const ProfileImg = styled(Profile)`
  border: 10px solid rgba(255, 255, 255, 0.2);
  animation: showup 3s 1;

  ${Media.hd`
    position: absolute !important;
    animation: none;
    opacity: 0;
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
  align-items: center;
  justify-content: center;
  z-index: 5;

  position: fixed;
  top: 0;
  left: 0;

  width: 256px;
  height: 100%;
  background-color: ${primaryColor.active};
  text-align: center;
  animation: slide-to-right 2s 1 ease-out;

  svg {
    display: none;
  }

  *::selection {
    background-color: ${primaryColor.text};
  }

  ul,
  img {
    pointer-events: all;
  }

  ul {
    margin: 96px 0;
    animation: showup 3s 1;
  }

  li + li {
    margin-top: 32px;
  }

  @keyframes slide-to-right {
    0%,
    60% {
      transform: translateX(-100%);
    }
  }

  @keyframes showup {
    0%,
    70% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
    }
  }

  ${Media.hd`
    top: 0;
    left: auto;
    right: 0;

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
        width: 100%;

        svg {
          transform: rotate(360deg);

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
          animation: showup-2 1.5s 1 ease-out;
          pointer-events: all;

          * {
            color: ${secundaryColor.text};
          }
        }

        @keyframes showup-2 {
          0%,
          60% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
          }
        }
      `}
  `}
`;
