import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { GlobalModal } from "./components/Modal";
import { NavBar } from "./components/NavBar";
import { useToggleTheme } from "./hooks/useToggleTheme";
import { ModalProvider } from "./providers/ModalProvider";
import { AppRouter } from "./routes";
import { GlobalStyle } from "./theme/globalStyle";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  const { theme, toggleTheme } = useToggleTheme();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 1000);
  }, []);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <ModalProvider>
          <NavBar toggleTheme={toggleTheme} />
          <AppRouter />
          {showFooter && <Footer />}
          <GlobalModal />
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
