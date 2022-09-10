import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const MobileNavContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  margin-left: auto;
`;

export const HamburguerContainer = styled.div`
  margin-left: auto;
  padding-right: 2rem;
`;

export const BurguerMenu = styled.section<{ isVisible: boolean }>`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
`;

export const CloseIcon = styled(IoMdClose)``;

export const ItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 1.6rem
`;

export const CloseIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  padding: 0.5rem;
`;
