import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/NavBar";
import { useToggleTheme } from "./hooks/useToggleTheme";
import { GlobalStyle } from "./theme/globalStyle";
import { darkTheme, lightTheme } from "./theme/theme";


function App() {
  const { theme, toggleTheme } = useToggleTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme}/>
      <div>
        <button onClick={toggleTheme}>sdfsddfas</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
