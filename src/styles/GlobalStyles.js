import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root {
    height: 100vh;
    width: 100vw;
    background-color: #f5f4f1;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
