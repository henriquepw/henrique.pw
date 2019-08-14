import styled from 'styled-components';

import {
  backgroundColor,
  primaryTextColor,
  primaryColor,
} from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;

  width: 250px;
  height: 100%;
  background: ${backgroundColor};

  div {
    display: flex;
    align-items: center;
    flex: 1;

    > img {
      width: 160px;
      height: 160px;
      border-radius: 50%;

      border: 10px solid ${primaryTextColor(0.2)};
    }
  }

  ul {
    flex: 1.2;

    li {
      font-size: 2.14rem;
      font-weight: lighter;
      text-align: center;
      opacity: 0.8;

      user-select: none;
      cursor: pointer;

      &:hover {
        transform: scale(1.15);
        transition: transform 0.3s;

        color: ${primaryColor};
      }

      &:active {
        opacity: 1;
        font-weight: normal;
        color: ${primaryColor};

        transform: scale(1.1);
        transition: transform 0.2s;
      }
    }

    li + li {
      margin-top: 20px;
    }
  }
`;
