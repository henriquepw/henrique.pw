import styled from 'styled-components';

import button from '@/styles/components/button';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 88px 96px 0 120px;
  flex: 1;

  > div {
    margin-right: 124px;
    margin-bottom: 40px;
  }

  button {
    ${button}

    margin-left: auto;
    margin-top: 94px;
  }
`;
