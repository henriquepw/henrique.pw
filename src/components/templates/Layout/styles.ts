import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.main)`
  ${({ theme }) => css`
    display: flex;
    position: relative;

    width: 100%;
    height: 100%;
    padding: ${theme.baseSpace * 14}rem ${theme.baseSpace * 32}rem;
    margin: auto 0;
  `}
`;

export const TransitionFrame = styled(motion.span)`
  position: fixed;
  z-index: 5;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background: ${({ theme }) => theme.colors.active};
`;
