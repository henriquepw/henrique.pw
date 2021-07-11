import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    transition: color 0.1s, background 0.4s, border-color 0.4s;

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &::selection {
      background-color: ${theme.colors.active};
      color: ${theme.colors.text};
    }
  }

  html {
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  html,
  body,
  #__next {
    min-width: 100%;
    min-height: 100%;
  }

  #__next {
    display: flex;
    min-height: 100vh;
  }

  body {
    font-family: ${theme.fonts.family.heading};

    color: ${theme.colors.text};
    background: ${theme.colors.background};
  }

  a,
  button {
    color: ${theme.colors.text};
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }

  textarea {
    resize: vertical;
  }

  strong {
    color: ${theme.colors.active};
  }

  dd,
  p {
    font-family: ${theme.fonts.family.paragraph};
    font-size: ${theme.fonts.sizes.p};
  }

  h1 {
    font-size: ${theme.fonts.sizes.h1};
  }

  h2 {
    font-size: ${theme.fonts.sizes.h2};
    font-weight: 400;
  }

  h3 {
    font-size: ${theme.fonts.sizes.h3};
  }

  h4 {
    font-size: ${theme.fonts.sizes.h4};
  }

  h5 {
    font-size: ${theme.fonts.sizes.h5};
  }

  li {
    list-style-type: none;
  }

  svg {
    stroke-width: 1px;
  }

  button {
    width: auto;
    border: none;
    overflow: visible;
    cursor: pointer;

    background: transparent;
    border-color: transparent;

    color: inherit;
    font: inherit;

    line-height: normal;
    -webkit-appearance: none;
  }
`}
`;
