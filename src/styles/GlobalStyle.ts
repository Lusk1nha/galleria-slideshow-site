import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    
    outline: 0;

    box-sizing: border-box;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  #root, body {
    width: 100%;
    min-height: 100vh;

    display: flex;
  }
`;

export {
  GlobalStyle
}