import styled, { css } from 'styled-components';

interface ContainerProps {
  isRight?: boolean;
}

export const Container = styled.h2<ContainerProps>`
  position: relative;

  font-weight: normal;
  font-size: 3.375rem;
  letter-spacing: 0.1em;

  margin-bottom: 90px;

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
    left: 0;

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
