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
            <S.Clickable to="/">Home</S.Clickable>
          </S.ListItem>
          <S.ListItem>
            <S.Clickable to="/new">New</S.Clickable>
          </S.ListItem>
          <S.ListItem>
            <S.Clickable to="/movies">Movies</S.Clickable>
          </S.ListItem>
          <S.ListItem>
            <S.Clickable to="/series">Series</S.Clickable>
          </S.ListItem>
          <S.ListItem>
            <S.Clickable to="/cartoons">Cartoon</S.Clickable>
          </S.ListItem>
        </S.List>
      </S.NavMenu>
      <S.DesktopSwitchContainer>
        <ThemeSwitch onChange={onChangeSwitch} checked={checked} />
      </S.DesktopSwitchContainer>
    </>
  );
};
