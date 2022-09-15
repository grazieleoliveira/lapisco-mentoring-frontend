import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <S.FooterText>
        Made with ❤️ by Grazi 甘梦希, <br /> Inspired by{" "}
        <a
          href={`https://dribbble.com/shots/16126116-Netflix-TV-App-Concept?utm_source=Clipboard_Shot&utm_campaign=DenisBashlaev&utm_content=Netflix%20TV%20App%20Concept&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=DenisBashlaev&utm_content=Netflix%20TV%20App%20Concept&utm_medium=Social_Share`}
        >
          Dis Bashlaev{" "}
        </a>
        on Dribble
      </S.FooterText>
    </S.Container>
  );
};
