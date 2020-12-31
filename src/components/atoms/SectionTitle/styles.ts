import styled, { css } from 'styled-components';

interface ContainerProps {
  isRight?: boolean;
}

export const Container = styled.h2<ContainerProps>`
  position: relative;

  font-weight: normal;
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
  letter-spacing: 0.1em;

  margin-bottom: 135px;
  text-transform: uppercase;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    height: 200%;
    width: 48px;

    top: -16px;

    background: ${({ theme }) => theme.colors.secondaryBackground};
    z-index: -1;
  }

  &::after {
    bottom: -16px;
    left: 24px;

    height: 1px;
    width: 48px;
    background: ${({ theme }) => theme.colors.active};
    z-index: 0;
  }

  ${({ isRight }) =>
    isRight &&
    css`
      &::before {
        right: 0;
      }

      &::after {
        left: auto;
        right: 24px;
      }
    `}
`;
