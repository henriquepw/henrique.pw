import { createGlobalStyle } from 'styled-components';

import { primaryColor, secundaryColor } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    &::selection {
      background-color: ${primaryColor.active};
      color: ${secundaryColor.text};
    }
  }

  body.using-mouse {
    * {
      outline: none !important;
    }
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${primaryColor.bg};
    font: 16px 'Raleway', sans-serif;
    color: ${primaryColor.text};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
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
