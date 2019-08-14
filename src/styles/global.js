import { createGlobalStyle } from 'styled-components';

import { backgroundColor, primaryTextColor } from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Patua+One|Raleway:300,400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html, body, #root {
    width: 100%;
    height: 100%;

    font-family: Raleway, Lato, sans-serif;
    font-size: 14px;
  }

  body {
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;

    background: ${backgroundColor};
    color: ${primaryTextColor};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
