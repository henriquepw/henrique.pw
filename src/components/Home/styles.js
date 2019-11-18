import styled from 'styled-components';

import Media from '~/styles/media';
import { primaryColor } from '~/styles/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  strong {
    display: inline;
    color: ${primaryColor.active};
  }

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-family: Patua One, cursive;
    font-size: 3em;
    padding-bottom: 10px;
    letter-spacing: 7px;
    animation: name 3s 1;
  }

  h2 {
    font-size: 1.5em;
    animation: description 3s 1;
    font-weight: normal;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    animation: icon 3s 1;
  }

  div {
    background-color: ${primaryColor.active};
    height: 1px;
    width: 100%;
    max-width: 650px;

    margin: 20px 0;

    border-radius: 1px;
  }

  @keyframes description {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
  }

  @keyframes name {
    0% {
      margin-bottom: -50px;
    }
    30% {
      letter-spacing: 15px;
      margin-bottom: -50px;
    }
    80% {
      letter-spacing: 5px;
      margin-bottom: -50px;
    }
  }

  @keyframes icon {
    0% {
      opacity: 0;
      margin-top: -60px;
    }
    80% {
      opacity: 0;
      margin-top: -60px;
    }
  }

  ${Media.tablet`
    h1 {
      font-size: 3em;
    }

    h2 {
      font-size: 1.5em;
      text-align: center;
    }
  `}

  ${Media.phone`
    h1 {
      letter-spacing: 2px;
      font-size: 2em;
    }

    h2 {
      font-size: 1em;
      text-align: center;
    }
  `}
`;
