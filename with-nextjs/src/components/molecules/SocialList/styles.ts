import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isSecondary?: boolean;
}

export const Container = styled(motion.ul)<ContainerProps>`
  ${({ theme, isSecondary }) => css`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    li + li {
      margin-right: ${theme.baseSpace * 6}rem;
    }

    a {
      color: ${isSecondary ? theme.colors.text : theme.colors.active};

      &:hover {
        color: ${theme.colors.active};
      }
    }
  `}
`;
