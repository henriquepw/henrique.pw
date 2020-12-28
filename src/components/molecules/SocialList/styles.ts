import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.ul)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  li + li {
    margin-right: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.active};
  }
`;
