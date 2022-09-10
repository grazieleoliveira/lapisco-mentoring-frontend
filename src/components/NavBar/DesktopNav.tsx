import * as S from "./styles";
import { IDesktopNav } from "./types";
import { ThemeSwitch } from "./ThemeSwitch";
import { useToggleSwitch } from "./useToggleSwitch";

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
          <S.ListItem>
            <S.Clickable href="/home">Home</S.Clickable>
          </S.ListItem>
          <S.ListItem>
            <S.Clickable href="/about">About</S.Clickable>
          </S.ListItem>
          <S.ListItem>
            <S.Clickable href="/contact">Contact</S.Clickable>
          </S.ListItem>
        </S.List>
      </S.NavMenu>
      <S.DesktopSwitchContainer>
        <ThemeSwitch onChange={onChangeSwitch} checked={checked} />
      </S.DesktopSwitchContainer>
    </>
  );
};
