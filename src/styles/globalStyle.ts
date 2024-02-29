import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl,
  li,
  blockquote,
  figure,
  hr,
  pre,
  fieldset,
  legend {
    margin: 0;
    padding: 0;
  }
  

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
  }

  input,
  textarea,
  select,
  button {
    font: inherit;
    margin: 0;
  }

  :focus {
    outline: none;
  }

`;

export default GlobalStyle;
