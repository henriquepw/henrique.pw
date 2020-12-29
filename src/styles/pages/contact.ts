import styled from 'styled-components';

import Layout from '@/components/templates/Layout';

export const Container = styled(Layout)`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  aside {
    h3,
    li {
      font-size: 1.125rem;
    }

    li {
      margin-bottom: 64px;
    }

    h3 {
      margin-bottom: 24px;
    }
  }
`;
