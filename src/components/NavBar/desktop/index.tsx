import { NavItems } from "../NavItems";
import { ThemeSwitch } from "../ThemeSwitch";
import { IDesktopNav } from "../types";
import { useToggleSwitch } from "../useToggleSwitch";
import * as S from "./styles";

export const DesktopNav = ({ toggleTheme }: IDesktopNav) => {
  const { checked, toggleSwitch } = useToggleSwitch();
  const onChangeSwitch = () => {
    toggleTheme();
    toggleSwitch();
  };

  return (
    <>
      <S.NavMenu>
        <S.List>
          <NavItems />
        </S.List>
      </S.NavMenu>
      <S.DesktopSwitchContainer>
        <ThemeSwitch onChange={onChangeSwitch} checked={checked} />
      </S.DesktopSwitchContainer>
    </>
  );
};
