import { createGlobalStyle } from 'styled-components';

import { primaryColor } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${primaryColor.bg};
    font: 16px 'Raleway', sans-serif;
    color: ${primaryColor.text};
  }

  a {
    color: ${primaryColor.text};
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

`;
/**
   *  a:focus {
    outline: 2px solid ${primaryColor.active};
    outline-offset: 2px;
  }
   */
