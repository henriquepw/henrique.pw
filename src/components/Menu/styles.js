import styled, { css } from 'styled-components';

import Profile from '~/components/Profile';

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

  width: 256px;
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
    position: fixed;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    transition: 1s ease;

    svg {
      display: block;
      position: absolute;
      cursor: pointer;

      top: 32px;
      right: 32px;
      transition: 1s;
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
          color: ${secundaryColor.text};
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
