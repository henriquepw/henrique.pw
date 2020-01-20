import { createGlobalStyle } from 'styled-components';

import { opacify } from 'polished';

import { primaryColor, secundaryColor } from './colors';
import Media from './media';

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${opacify(-0.2, primaryColor.active)};
    border-radius: 2.5px;
    transition: 0.2s;

    &:hover {
      background: ${primaryColor.active};
    }
  }

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

  html {
    scroll-behavior: smooth;
  }

  html, body {
    font: 16px 'Raleway', sans-serif;
    font-weight: 300;

    background-color: ${primaryColor.bg};
    color: ${primaryColor.text};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body.using-mouse {
    * {
      outline: none !important;
    }
  }

  #gatsby-focus-wrapper {
    min-height: 100%;

    ${Media.hd`
      padding-left: 0px;
    `}
  }

  button {
    font: 16px 'Raleway', sans-serif;
    font-weight: 300;

    background: transparent;
    border: none;
  }

  a,
  button {
    color: ${primaryColor.text};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  li {
    list-style-type: none;
  }

  ${Media.bigPhone`
    html, body {
      font-size: 14px;
    }
  `}
`;
