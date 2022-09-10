import * as S from "./styles";
import netflixImg from "../../assets/netflix.png";

export const NavBar = () => {
  return (
    <S.NavContainer>
      <S.ImgContainer>
        <S.NetflixImage src={netflixImg} />
      </S.ImgContainer>
      <button className="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
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
    </S.NavContainer>
  );
};
