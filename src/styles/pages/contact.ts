import styled from 'styled-components';

import Layout from '@/components/templates/Layout';

import button from '../components/button';

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

  form {
    display: flex;
    flex-direction: column;
    margin: 88px 96px 0 120px;
    flex: 1;

    input,
    textarea {
      margin-right: 124px;
      margin-bottom: 40px;
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

  button {
    ${button}

    margin-left: auto;
    margin-top: 94px;
  }
`;
