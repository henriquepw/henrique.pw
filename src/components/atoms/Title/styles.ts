import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.h1)`
  position: relative;
  font-size: 2.25rem;
  font-weight: 400;

  margin: 64px 0;
  text-align: center;

  &::after {
    content: '';
    position: absolute;

    bottom: 0;
    left: 50%;
    transform: translate(-50%, 8px);

    height: 2px;
    width: 50%;

    border-radius: 1px;
    background-color: ${({ theme }) => theme.primary.active};
  }
`;
