import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected?: boolean;
}

export const Container = styled.li<ContainerProps>`
  position: relative;

  &::after {
    content: '';
    position: absolute;

    top: 50%;
    left: 45%;
    transform: translate3d(-50%, -50%, 0) scaleY(0);
    transition: transform 0.3s ease-in;
    pointer-events: none;

    height: calc(100% + 32px);
    width: 1px;

    background: ${({ theme }) => theme.colors.active};
  }

  div {
    overflow: hidden;
    transition: transform 0.3s ease-in;

    width: 0.55rem;
    font-size: 1rem;
    left: 49%;

    span {
      display: block;
      transform: translateX(8%);
      background: ${({ theme }) => theme.colors.background};
    }
  }

  div + div {
    left: 48.9%;
    width: 0.45rem;

    span {
      transform: translateX(55%);
    }
  }

  &:hover {
    &::after {
      transform: translate3d(-50%, -50%, 0) scaleY(1);
    }

    div {
      color: ${({ theme }) => theme.colors.active};
      transform: translateY(-1px);
    }

    div + div {
      transform: translateY(1px);
    }
  }

  &:active {
    div,
    div + div {
      transform: translateY(0);
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      &::after {
        transform: translate3d(-50%, -50%, 0) scaleY(1);
      }
    `}
`;
