import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      background-color: ${({ theme }) => theme.colors.active};
      color: ${({ theme }) => theme.colors.text};
    }
  }

  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;

    font-family: 'Raleway', sans-serif;

    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }

  #__next {
    width: 100%;
    height: 100%;

    padding: 32px 64px;
  }

  a,
  button {
    color: ${({ theme }) => theme.colors.text};
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }

  strong {
    color: ${({ theme }) => theme.colors.active};
  }

  p {
    font-family: 'Space Mono';
  }

  h1 {
    font-size: 3.375rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  li {
    list-style-type: none;
  }
`;
