import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface NavigateProps {
  isSelected?: boolean;
}

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;

    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    padding: ${theme.baseSpace * 8}rem 0;
    z-index: 1000;
    pointer-events: none;

    &::before,
    &::after {
      content: '';
      position: fixed;
      left: 0;

      height: ${theme.baseSpace * 8}rem;
      width: 100%;

      transition: background 0.4s;
      background: ${theme.colors.background};
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  `}
`;

export const Frame = styled.div`
  ${({ theme }) => css`
    position: fixed;
    pointer-events: none;

    top: ${theme.baseSpace * 8}rem;
    left: ${theme.baseSpace * 16}rem;
    width: calc(100% - ${theme.baseSpace * 32}rem);
    height: calc(100% - ${theme.baseSpace * 16}rem);
    border: 1px solid ${theme.colors.active};
    z-index: 10;
  `}
`;

export const ExtraConfigs = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: ${theme.colors.background};
    pointer-events: all;

    width: ${theme.baseSpace * 16}rem;
    height: 100%;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li + li {
        margin-top: ${theme.baseSpace * 8}rem;
      }
    }
  `}
`;

export const ScrollBar = styled(motion.div)`
  ${({ theme }) => css`
    width: 1px;
    height: 100%;
    margin: ${theme.baseSpace * 6}rem 0;

    background: ${theme.colors.active};
  `}
`;

export const UpButton = styled(motion.button)`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    pointer-events: all;

    bottom: ${theme.baseSpace * 8}rem;
    right: ${theme.baseSpace * 8}rem;
    transform: translateX(50%);
    z-index: 10;

    &:hover {
      color: ${theme.colors.active};
    }
  `}
`;

export const Navigator = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.background};
    pointer-events: all;

    writing-mode: vertical-rl;
    text-orientation: mixed;

    width: ${theme.baseSpace * 16}rem;
    height: 100%;

    li + li {
      margin-top: ${theme.baseSpace * 16}rem;
    }
  `}
`;

export const NavigateButton = styled.button.attrs({
  type: 'button',
})<NavigateProps>`
  ${({ theme, isSelected }) => css`
    position: relative;

    span {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
    }

    ${isSelected &&
    css`
      color: ${theme.colors.active};
    `}

    &:hover {
      border: none;

      span {
        color: ${theme.colors.active};
      }
    }
  `}
`;
