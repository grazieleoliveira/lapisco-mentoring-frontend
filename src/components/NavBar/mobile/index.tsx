import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "styled-components";
import { ThemeSwitch } from "../ThemeSwitch";
import { IMobileNav } from "../types";
import { useToggleSwitch } from "../useToggleSwitch";
import { useState } from "react";
import { NavItems } from "../NavItems";

export const MobileNav = ({ toggleTheme }: IMobileNav) => {
  const theme = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);
  const { checked, toggleSwitch } = useToggleSwitch();
  const onChangeSwitch = () => {
    toggleTheme();
    toggleSwitch();
  };
  return (
    <>
      <S.MobileNavContainer>
        <ThemeSwitch checked={checked} onChange={onChangeSwitch} />
        <S.HamburguerContainer onClick={() => setShowSidebar(!showSidebar)}>
          <GiHamburgerMenu color={theme.colors.text} size="1.6rem" />
        </S.HamburguerContainer>
        {showSidebar && (
          <S.BurguerMenu isVisible={showSidebar}>
            <S.CloseIconContainer>
              <S.CloseIcon
                color={theme.colors.text}
                size={"2rem"}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </S.CloseIconContainer>
            <S.ItemsContainer>
              <NavItems closeNavbar={() => setShowSidebar(!showSidebar)} />
            </S.ItemsContainer>
          </S.BurguerMenu>
        )}
      </S.MobileNavContainer>
    </>
  );
};
