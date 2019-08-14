import styled from 'styled-components';
import { primaryColor } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 250px;
  height: 100%;

  h1,
  h2 {
    font-weight: normal;
  }

  h1 {
    font-family: 'Patua One';
    font-size: 2.6rem;
    letter-spacing: 8px;
  }

  h2 {
    margin-top: 10px;
    font-size: 1.6rem;
    letter-spacing: 2px;
  }

  div {
    width: 550px;
    height: 1px;

    margin: 10px 0;
    border-radius: 0.5px;

    background: ${primaryColor};
  }

  strong {
    color: ${primaryColor};
  }
`;
