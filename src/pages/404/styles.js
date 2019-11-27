import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '~/components/Layout';
import { primaryColor, secundaryColor } from '~/styles/colors';

export const Container = styled(Layout)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  h1,
  h2,
  h3 {
    font-weight: 300;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 20em;
      color: ${primaryColor.active};
      animation: _404 1.5s 1 ease-in-out;

      letter-spacing: 10px;
      user-select: none;

      span {
        letter-spacing: normal;
      }
    }

    h2 {
      font-size: 2em;
      margin-top: -2.1em;
      margin-left: 2.5em;
      animation: not-found 1.5s 1 ease-in-out;
    }
  }

  h3 {
    font-size: 3.2em;
    margin-bottom: 7em;
  }

  @keyframes _404 {
    0% {
      opacity: 0;
      letter-spacing: 0.8em;
    }
  }

  @keyframes not-found {
    0% {
      opacity: 0;
      margin-top: 1em;
    }
  }
`;

export const Button = styled(Link)`
  border: 1px solid ${primaryColor.active};
  border-radius: 30px;
  font-size: 1.2em;

  margin-top: 3em;
  padding: 15px 30px;
  transition: 0.2s;

  &:hover {
    box-shadow: 2px 2px 20px -1px ${primaryColor.text};
    background-color: ${primaryColor.active};
    color: ${secundaryColor.text};
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 2px -1px ${primaryColor.text};
  }
`;
