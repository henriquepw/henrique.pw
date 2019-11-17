import { createGlobalStyle } from 'styled-components';

import { primaryColor } from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Patua+One|Raleway:300,400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${primaryColor.bg};
    font: 16px 'Raleway', sans-serif;
  }

  a {
    color: ${primaryColor.text};
    text-decoration: none;
  }

  a:focus {
    outline: 2px solid ${primaryColor.active};
    outline-offset: 2px;
  }
`;
