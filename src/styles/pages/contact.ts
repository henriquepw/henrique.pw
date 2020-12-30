import styled from 'styled-components';

import Layout from '@/components/templates/Layout';

export const Container = styled(Layout)`
  display: flex;
  flex-direction: column;

  h1 {
    margin-left: 24px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:before {
      content: '';
      position: absolute;

      top: -88px;
      left: 0;

      height: calc(100% + 88px);
      width: 64px;

      background: ${({ theme }) => theme.colors.secondaryBackground};
      z-index: -1;
    }
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
