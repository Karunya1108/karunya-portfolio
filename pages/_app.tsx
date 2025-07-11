import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css';



const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background-color:rgb(107, 45, 169);
    color: #ffffff;
  }

  button {
    font-family: inherit;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
