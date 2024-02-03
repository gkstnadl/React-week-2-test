import React from 'react';
import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FanLetterProvider } from './components/FanLetterContext';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: 'Pretendard-Regular';
  }
  
  button {
    cursor: pointer;
  }
`;

function App() {
  return (
    <FanLetterProvider>
      <GlobalStyle />
      <Router />
    </FanLetterProvider>
  );
}

export default App;
