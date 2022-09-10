import { useState } from "react";

type TTheme = 'light' | 'dark'

export const useToggleTheme = () => {
  const [theme, setTheme] = useState<TTheme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return {toggleTheme, theme}
};
