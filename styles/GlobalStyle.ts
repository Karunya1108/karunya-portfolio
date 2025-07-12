// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  #tsparticles {
  position: absolute !important;
  z-index: 0 !important;
}
`;

export default GlobalStyle;
