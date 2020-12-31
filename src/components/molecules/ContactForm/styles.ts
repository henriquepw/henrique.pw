import styled from 'styled-components';

import button from '@/styles/components/button';

export const Container = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 88px 96px 0 120px;

  > div {
    margin-right: 124px;
    margin-bottom: 40px;
  }

  button {
    ${button}

    display: flex;
    align-items: center;
    text-transform: capitalize;

    margin-left: auto;
    margin-top: 94px;

    svg {
      margin-left: 24px;
    }
  }
`;
