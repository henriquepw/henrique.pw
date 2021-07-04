import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 4;

    bottom: ${theme.baseSpace * 8 + 1.5}rem;
    right: ${theme.baseSpace * 16 + 2}rem;

    margin-top: ${theme.baseSpace * 2}rem;
    margin-right: ${theme.baseSpace * 2}rem;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;

      top: -${theme.baseSpace * 2}rem;
      left: ${theme.baseSpace * 2}rem;
      height: 100%;
      width: 100%;

      border: 1px solid ${theme.colors.active};
    }

    svg {
      margin-left: ${theme.baseSpace * 6}rem;
      cursor: pointer;

      &:hover {
        color: ${theme.colors.active};
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.baseSpace * 4}rem;
    background: ${theme.colors.secondaryBackground};
  `}
`;
