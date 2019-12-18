import styled, { css } from 'styled-components';

import Profile from '~/atoms/Profile';

import Media from '~/styles/media';
import { primaryColor, secundaryColor } from '~/styles/colors';

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
    transition: 1s ease;

    svg {
      display: block;
      position: absolute;
      cursor: pointer;

      top: 20px;
      right: 20px;
      transition: 1s;

      &:hover {
        transition: 0.1s;
        color: ${primaryColor.active};
      }
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
          transition: 1s;
          // transform: rotate(360deg);
          color: ${secundaryColor.text};

          line {
            transition: 0.5s;
          }

          line:nth-child(1) {
            opacity: 0;
          }

          line:nth-child(2) {
            transform: rotateZ(45deg) translate(1.5px, -2px);
            transform-origin: top left;
            transform-box: fill-box;
          }

          line:nth-child(3) {
            transform: rotateZ(-45deg) translate(2px, 2px);
            transform-origin: bottom left;
            transform-box: fill-box;
          }

          &:hover {
            color: ${secundaryColor.text};
          }
        }

        ul {
          opacity: 1;
          animation: showup-2 1.5s 1 ease-out;
        }

        @keyframes showup-2 {
          0%,
          60% {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
          }
        }
      `}
  `}
`;
