import styled from 'styled-components';

import Layout from '@/components/templates/Layout';

export const Container = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  div:first-of-type {
    text-align: right;
    padding-right: 32px;
    margin-right: 32px;

    h2 {
      margin: 32px 0;
      max-width: 490px;
    }
  }

  div:last-of-type {
    width: 100%;

    max-height: 480px;
    max-width: 480px;
  }
`;
