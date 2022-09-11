import { useContext } from "react";
import { ModalContext } from "./ModalProvider";

export const useGlobalModal = () => useContext(ModalContext);
