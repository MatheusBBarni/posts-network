import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  :root {
    --bgColor: #DDDDDD;
    --font: 'Roboto', sans-serif;
  }

  *,
  body {
    font-family: var(--font);
  }

  body {
    background-color: var(--bgColor);
  }

  button {
    cursor: pointer;
  }

  input,
  select {
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;    
    box-sizing: border-box;  
  }
`