import { createContext, useState } from "react";
import { IModalContext, IModalProvider } from "./types";

export const ModalContext = createContext<IModalContext>({
  closeModal: () => {},
  contentId: "",
  isModalOpen: false,
  openContentModalById: () => {},
});

export const ModalProvider = ({ children }: IModalProvider) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentId, setContentId] = useState("");

  const openContentModalById = (id: string) => {
    setIsModalOpen(!isModalOpen);
    setContentId(id);
  };

  const closeModal = () => setIsModalOpen(!isModalOpen);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openContentModalById, closeModal, contentId }}
    >
      {children}
    </ModalContext.Provider>
  );
};
