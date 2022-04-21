import styled, { css } from 'styled-components';

interface ContainerProps {
  isRight?: boolean;
}

export const Container = styled.h2<ContainerProps>`
  ${({ theme, isRight }) => css`
    position: relative;

    font-weight: normal;
    font-size: ${theme.fonts.sizes.h1};
    letter-spacing: 0.1em;

    margin-bottom: ${theme.baseSpace * 34}rem;
    text-transform: uppercase;

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &::before {
      height: 200%;
      width: ${theme.baseSpace * 12}rem;

      top: -${theme.baseSpace * 4}rem;

      background: ${theme.colors.secondaryBackground};
      z-index: -1;
    }

    &::after {
      bottom: -${theme.baseSpace * 4}rem;
      left: ${theme.baseSpace * 6}rem;

      height: 1px;
      width: ${theme.baseSpace * 12}rem;
      background: ${theme.colors.active};
      z-index: 0;
    }

    ${isRight &&
    css`
      &::before {
        right: 0;
      }

      &::after {
        left: auto;
        right: ${theme.baseSpace * 6}rem;
      }
    `}
  `}
`;
