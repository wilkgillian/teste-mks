import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
    /* overflow-x: hidden; */
  }
  iframe {
    display: none;
  }

  body, input, button {
    font: 14px Montserrat, sans-serif;
  }
  #root {
    width: 100%;
    max-width: 1440px;
    margin: auto;
  }

  button {
    cursor: pointer;
  }
`;
