import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    transition: all 0.25s linear;
  }
`;
