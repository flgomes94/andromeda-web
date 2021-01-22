import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body {
    background:#34495E;
    -webkit-font-smoothing:antialiased;
  }


  body,input,button {
    font:12pt Roboto, sans-serif;
  }

  #root{
    margin:0 auto;
    display:flex;
    justify-content:center;
  }

  button {
    cursor:pointer;
  }
`;
