import Modal from "react-modal";
import { useGlobalModal } from "../../providers/useGlobalModal";

export const GlobalModal = () => {
  const { closeModal, contentId, isModalOpen, openContentModalById } =
    useGlobalModal();
  return isModalOpen ? (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          zIndex: 4,
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <h1>sdfsdfdfs</h1>
    </Modal>
  ) : (
    <></>
  );
};
