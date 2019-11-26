import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '~/components/Layout';
import { primaryColor } from '~/styles/colors';

export const Container = styled(Layout)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h2,
  h3 {
    font-weight: 400;
  }

  h1 {
    font-size: 20em;
    color: ${primaryColor.active};
  }
`;

export const Button = styled(Link)`
  border: 1px solid ${primaryColor.active};
  padding: 10px;
  border-radius: 30px;
`;
