import Modal from "react-modal";
import { useGlobalModal } from "../../providers/useGlobalModal";
import styled, { useTheme } from "styled-components";
import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { deviceSizes } from "../../constants/devices";

export const GlobalModal = () => {
  const { closeModal, contentId, isModalOpen, openContentModalById } =
    useGlobalModal();
  const [opacity, setOpacity] = useState(0);
  const theme = useTheme();
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth > deviceSizes.tablet;

  const closeModalAndResetStyles = () => {
    closeModal();
    setOpacity(0);
  };

  return isModalOpen ? (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModalAndResetStyles}
      onAfterOpen={() => setOpacity(1)}
      closeTimeoutMS={500}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: theme.colors.modalBg,
          zIndex: 4,
          transition: "opacity 300ms ease-in-out, transform 500ms",
          opacity,
        },
        content: {
          position: "absolute",
          top: `${isDesktop ? "10rem" : "10rem"}`,
          left: `${isDesktop ? "10rem" : "2rem"}`,
          right: `${isDesktop ? "10rem" : "2rem"}`,
          bottom: `${isDesktop ? "10rem" : "10rem"}`,
          border: "1px solid #ccc",
          background: theme.colors.body,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          borderColor: theme.colors.body,
          padding: "20px",
          transition: "opacity 500ms ease-in-out",
          opacity,
        },
      }}
    >
      <h1>sdfsdfdfs</h1>
    </Modal>
  ) : (
    <></>
  );
};
