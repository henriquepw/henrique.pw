import { motion } from 'framer-motion';
import styled from 'styled-components';

import Layout from '@/components/templates/Layout';

import buttonStyle from '../components/button';

export const Container = styled(Layout)`
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  padding: 32px;

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
      margin: 32px 0;
      max-width: 490px;
    }

    button {
      margin-left: auto;
      margin-top: 48px;
    }
  }

  > div:last-of-type {
    width: 100%;

    max-height: 480px;
    max-width: 480px;
  }
`;

export const Divider = styled(motion.div)`
  width: 1px;
  margin: 40px;
  background: ${({ theme }) => theme.colors.text};
`;

export const Button = styled(motion.a)`
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-top: 48px;

  ${buttonStyle}

  svg {
    margin-left: 24px;
  }
`;
