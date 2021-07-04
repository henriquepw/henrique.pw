import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import button from '@/styles/components/button';

export const Container = styled.form`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: ${theme.baseSpace * 22}rem ${theme.baseSpace * 24}rem 0
      ${theme.baseSpace * 30}rem;

    > div {
      margin-right: ${theme.baseSpace * 30}rem;
      margin-bottom: ${theme.baseSpace * 10}rem;
    }

    button {
      ${button}

      display: flex;
      align-items: center;
      text-transform: capitalize;

      margin-left: auto;
      margin-top: ${theme.baseSpace * 24}rem;

      span {
        margin-right: ${theme.baseSpace * 6}rem;
      }
    }
  `}
`;

export const LoaderIndicator = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
