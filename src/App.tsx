import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { GlobalModal } from "./components/Modal";
import { NavBar } from "./components/NavBar";
import { useToggleTheme } from "./hooks/useToggleTheme";
import { ModalProvider } from "./providers/ModalProvider";
import { AppRouter } from "./routes";
import { GlobalStyle } from "./theme/globalStyle";
import { darkTheme, lightTheme } from "./theme/theme";
import netflixImg from "./assets/netflix.png";

export const StartAnimationContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const NetflixImage = styled.img`
  display: flex;
  @keyframes show-image {
    0% {
      transform: scale(0.5);
      opacity: 0.3;
    }
    100% {
      transform: scale(1.5);
      opacity: 1;
    }
  }
  width: 12rem;
  animation-fill-mode: forwards;
  animation-name: show-image;
  animation-duration: 1.4s;
`;

function App() {
  const { theme, toggleTheme } = useToggleTheme();
  const [showFooter, setShowFooter] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 2600);

    setTimeout(() => {
      setShowContent(true);
    }, 1600);
  }, []);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <ModalProvider>
          {showContent ? (
            <>
              <NavBar toggleTheme={toggleTheme} />
              {<AppRouter />}
              {showFooter && <Footer />}
              <GlobalModal />
            </>
          ) : (
            <StartAnimationContainer>
              <NetflixImage src={netflixImg} />
            </StartAnimationContainer>
          )}
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
