import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ContainerProps {
  isSecondary?: boolean;
}

export const Container = styled(motion.ul)<ContainerProps>`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  li + li {
    margin-right: 24px;
  }

  a {
    color: ${({ isSecondary, theme }) =>
      isSecondary ? theme.colors.text : theme.colors.active};

    &:hover {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;
