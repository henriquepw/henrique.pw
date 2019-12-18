import styled from 'styled-components';
import { primaryColor, secundaryColor } from '~/styles/colors';

export const Container = styled.li`
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  margin-bottom: 64px;

  h2 {
    font-size: 2.5rem;
    font-weight: 300;

    margin: 8px 0px auto;

    color: ${primaryColor.active};
    text-align: right;
  }

  div {
    background-color: ${secundaryColor.text};
    position: relative;

    max-width: 360px;

    border-left: none;
    border-right: 2px solid ${primaryColor.active};

    padding: 16px;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 16px;
    }

    p {
      font-size: 1rem;
    }

    &::before {
      content: '';
      position: absolute;

      top: 16px;
      left: -16px;

      border-top: 16px solid transparent;
      border-bottom: 16px solid transparent;
      border-right: 16px solid ${secundaryColor.text};
    }
  }

  &:nth-child(even) {
    h2 {
      grid-column: 3/3;
      grid-row: 1;

      text-align: left;
    }

    div {
      grid-column: 1;
      grid-row: 1;

      border-left: 2px solid ${primaryColor.active};
      border-right: none;

      text-align: right;

      &::before {
        left: auto;
        right: -16px;

        border-right: none;
        border-left: 16px solid ${secundaryColor.text};
      }
    }
  }
`;

export const Dot = styled.span`
  position: relative;

  width: 10px;
  height: 10px;

  grid-column: 2;
  grid-row: 1;

  margin: calc(32px - 5px) 56px 0px;

  border-radius: 50%;
  background-color: ${primaryColor.active};
`;
