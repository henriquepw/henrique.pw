import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.main)`
  display: flex;
  position: relative;

  width: 100%;
  height: 100%;
  padding: 56px 128px;
  margin: auto 0;
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
