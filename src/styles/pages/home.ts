import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import Layout from '@/components/templates/Layout';

import buttonStyle from '../components/button';

export const Container = styled(Layout)`
  ${({ theme }) => css`
    display: flex;
    align-items: stretch;
    justify-content: center;
    position: relative;
    padding: ${theme.baseSpace * 8}rem;

    > div:first-of-type {
      display: flex;
      flex-direction: column;
      justify-content: center;

      position: relative;
      text-align: right;

      height: 100%;
      max-height: 480px;
      margin: auto 0;

      div {
        overflow: hidden;
      }

      h2 {
        margin: ${theme.baseSpace * 8}rem 0;
        max-width: 490px;
      }

      button {
        margin-left: auto;
        margin-top: ${theme.baseSpace * 12}rem;
      }
    }

    > div:last-of-type {
      width: 100%;

      max-height: 480px;
      max-width: 480px;
    }
  `}
`;

export const Divider = styled(motion.div)`
  ${({ theme }) => css`
    width: 1px;
    margin: ${theme.baseSpace * 10}rem;
    background: ${theme.colors.text};
  `}
`;

export const Button = styled(motion.a)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    margin-left: auto;
    margin-top: ${theme.baseSpace * 12}rem;

    ${buttonStyle}

    svg {
      margin-left: ${theme.baseSpace * 6}rem;
    }
  `}
`;
