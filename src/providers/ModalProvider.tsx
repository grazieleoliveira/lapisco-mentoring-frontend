import { createContext, useState } from "react";
import { MovieAndTvShow } from "../constants/initialValues";
import { ITrendingMovies } from "../types";
import { IModalContext, IModalProvider } from "./types";

export const ModalContext = createContext<IModalContext>({
  closeModal: () => {},
  content: MovieAndTvShow,
  isModalOpen: false,
  openContentModal: () => {},
});

export const ModalProvider = ({ children }: IModalProvider) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState<ITrendingMovies>(MovieAndTvShow);

  const openContentModal = (content: ITrendingMovies) => {
    setIsModalOpen(!isModalOpen);
    setContent(content);
  };

  const closeModal = () => setIsModalOpen(!isModalOpen);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openContentModal, closeModal, content }}
    >
      {children}
    </ModalContext.Provider>
  );
};
