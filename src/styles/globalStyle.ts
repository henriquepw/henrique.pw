import { createGlobalStyle } from 'styled-components';
import { background } from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Patua+One|Staatliches|VT323');

  body {
    font-family: Lato, sans-serif;
    background-color: ${background};
    margin: 0px;
  }
`;
