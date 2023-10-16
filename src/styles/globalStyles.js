import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  #root {
    max-width: 2000px;
    margin: 0 auto; //

  }
  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  html{
    font-family: 'Noto Sans KR', sans-serif;
  } 

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* for naver Marker*/ 
  @keyframes grow {
    0% { transform: scale(0.8); }
    100% { transform: scale(1.3); }
  }
  
  .animated-marker div {   // <- 이 부분이 추가됨
    animation: grow 0.5s ease-in-out;
  }
  /* for naver Marker*/ 

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
