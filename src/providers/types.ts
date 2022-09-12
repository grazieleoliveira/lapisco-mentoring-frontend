import React from "react";
import { ITrendingMovies } from "../types";

export interface IModalProvider {
  children: React.ReactNode;
}

export interface IModalContext {
  isModalOpen: boolean;
  openContentModal: (content: ITrendingMovies) => void;
  closeModal: () => void;
  content: ITrendingMovies;
}
