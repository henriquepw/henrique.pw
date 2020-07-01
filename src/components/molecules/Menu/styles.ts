import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

import { primaryColor, secundaryColor } from '~/styles/colors';
import Media from '~/styles/media';

interface ContainerProps {
  pressed?: boolean;
}

interface MenuItemProps {
  selected?: boolean;
}

export const Container = styled.nav<ContainerProps>`
  z-index: 5;

  top: 0;
  right: 0;
  position: fixed;

  width: 0;
  height: 100%;
  background-color: transparent;

  *::selection {
    background-color: ${primaryColor.text};
  }

  svg {
    position: absolute;
    cursor: pointer;

    stroke-width: 1;
    -webkit-tap-highlight-color: transparent;

    top: 24px;
    right: 24px;
    z-index: 5;

    line {
      transition: 0.5s ease-out;
    }

    &:hover {
      line {
        color: ${primaryColor.active};
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    background-color: ${primaryColor.active};
    height: 100%;
    width: 320px;

    top: 0;
    right: 0;

    z-index: 4;

    ${Media.bigPhone`
      width: 100vw;
    `}
  }

  ${({ pressed }) =>
    pressed &&
    css`
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
    `}
`;

export const MenuItem = styled(motion.li)<MenuItemProps>`
  & + & {
    margin-top: 32px;
  }

  &:hover {
    opacity: 1;
  }

  a {
    display: block;
    text-transform: capitalize;
    color: ${secundaryColor.text};

    font-size: 1.75rem;
    opacity: 0.7;

    ${({ selected }) =>
      selected &&
      css`
        opacity: 1;
        font-weight: 400;
        transform: scale(1.05);
      `}
  }

  ${Media.hd`
    a {
      font-size: 2rem;
    }
  `}
`;
