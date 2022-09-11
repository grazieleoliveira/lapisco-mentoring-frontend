import React from "react";

export interface IModalProvider {
  children: React.ReactNode;
}

export interface IModalContext {
  isModalOpen: boolean;
  openContentModalById: (id: string) => void;
  closeModal: () => void;
  contentId: string;
}
