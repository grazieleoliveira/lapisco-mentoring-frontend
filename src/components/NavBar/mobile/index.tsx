import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "styled-components";
import { ThemeSwitch } from "../ThemeSwitch";
import { IMobileNav } from "../types";
import { useToggleSwitch } from "../useToggleSwitch";


export const MobileNav = ({ toggleTheme }: IMobileNav) => {
  const theme = useTheme();
  const { checked, toggleSwitch } = useToggleSwitch();
  const onChangeSwitch = () => {
    toggleTheme();
    toggleSwitch();
  };
  return (
    <>
      <S.MobileNavContainer>
        <ThemeSwitch checked={checked} onChange={onChangeSwitch} />
        <S.HamburguerContainer>
          <GiHamburgerMenu color={theme.text} size="1.6rem" />
        </S.HamburguerContainer>
      </S.MobileNavContainer>
    </>
  );
};
