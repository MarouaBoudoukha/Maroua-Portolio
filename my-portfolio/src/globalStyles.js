// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f4f4f4;
    color: #333;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
