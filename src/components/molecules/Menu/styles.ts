import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface NavigateProps {
  isSelected?: boolean;
}

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  padding: 32px 0;
  z-index: 10;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: fixed;
    left: 0;

    height: 32px;
    width: 100%;

    transition: background 0.4s;
    background: ${({ theme }) => theme.colors.background};
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

export const Frame = styled.div`
  position: fixed;
  pointer-events: none;

  top: 32px;
  left: 64px;
  width: calc(100% - 128px);
  height: calc(100% - 64px);
  border: 1px solid ${({ theme }) => theme.colors.active};
  z-index: 10;
`;

export const ExtraConfigs = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
  pointer-events: all;

  width: 64px;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li + li {
      margin-top: 32px;
    }
  }
`;

export const ScrollBar = styled(motion.div)`
  width: 1px;
  height: 100%;
  margin: 24px 0;

  background: ${({ theme }) => theme.colors.active};
`;

export const UpButton = styled(motion.button)`
  position: absolute;
  cursor: pointer;
  pointer-events: all;

  bottom: 32px;
  right: 32px;
  transform: translateX(50%);
  z-index: 10;

  &:hover {
    color: ${({ theme }) => theme.colors.active};
  }
`;

export const Navigator = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
  pointer-events: all;

  writing-mode: vertical-rl;
  text-orientation: mixed;

  width: 64px;
  height: 100%;

  li + li {
    margin-top: 64px;
  }
`;

export const NavigateButton = styled.button.attrs({
  type: 'button',
})<NavigateProps>`
  position: relative;

  span {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      color: ${theme.colors.active};
    `}

  &:hover {
    border: none;

    span {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;
