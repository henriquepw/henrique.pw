import styled from 'styled-components';

// import Layout from '@/components/templates/Layout';

import buttonStyle from '../components/button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  > div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    text-align: right;

    padding-right: 40px;
    margin-right: 40px;

    height: 100%;
    max-height: 480px;

    h2 {
      margin: 32px 0;
      max-width: 490px;
    }

    &::after {
      content: '';
      position: absolute;

      top: 50%;
      right: 0;
      transform: translateY(-50%);

      width: 1px;
      height: calc(100% + 80px);
      background: ${({ theme }) => theme.colors.text};
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

export const Button = styled.a`
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-top: 48px;

  ${buttonStyle}

  svg {
    margin-left: 24px;
  }
`;
