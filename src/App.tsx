import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
import { lightTheme } from "./theme/theme";

const Root = styled.div`
  background-color: red;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div>
        <a>sddsffsd</a>
      </div>
    </ThemeProvider>
  );
}

export default App;
