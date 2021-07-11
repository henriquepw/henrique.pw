import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected?: boolean;
}

export const Container = styled.li<ContainerProps>`
  ${({ theme, isSelected }) => css`
    position: relative;

    &::after {
      content: '';
      position: absolute;

      top: 50%;
      left: 45%;
      transform: translate3d(-50%, -50%, 0) scaleY(0);
      transition: transform 0.3s ease-in;
      pointer-events: none;

      height: calc(100% + ${theme.baseSpace * 8}rem);
      width: 1px;

      background: ${theme.colors.active};
    }

    div {
      overflow: hidden;
      transition: transform 0.3s ease-in;
      user-select: none;

      width: 0.55rem;
      font-size: ${theme.fonts.sizes.p};
      left: 49%;

      span {
        display: block;
        transform: translateX(8%);
        background: ${theme.colors.background};
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
        color: ${theme.colors.active};
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

    ${isSelected &&
    css`
      &::after {
        transform: translate3d(-50%, -50%, 0) scaleY(1);
      }
    `}
  `}
`;
