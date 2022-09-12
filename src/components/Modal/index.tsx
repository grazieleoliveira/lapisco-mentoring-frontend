import Modal from "react-modal";
import { useGlobalModal } from "../../providers/useGlobalModal";
import { useTheme } from "styled-components";
import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { deviceSizes } from "../../constants/devices";
import { TMDB_IMG_BASE_URL } from "../../constants/apiUrls";

const getImgLinearGradient = (color: string) => {
  if ("#121620" === color) {
    return "linear-gradient(to bottom, rgba(18, 22, 32, 0) 0%, rgba(18, 22, 32, 0.5) 59%, rgba(18, 22, 32, 1) 100%)";
  }
  if ("#f1f1f1" === color) {
    return "linear-gradient(to bottom, rgba(241, 241, 241, 0) 0%, rgba(241, 241, 241, 0.5) 59%, rgba(241, 241, 241, 1) 100%)";
  }
};

export const GlobalModal = () => {
  const { closeModal, content, isModalOpen } = useGlobalModal();
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
          padding: 0,
        },
        content: {
          position: "absolute",
          //todo: ajeitar a responsividade disso aq
          top: `${isDesktop ? "4em" : "2em"}`,
          left: `${isDesktop ? "4em" : "2em"}`,
          right: `${isDesktop ? "4em" : "2em"}`,
          bottom: `${isDesktop ? "4em" : "2em"}`,
          border: "0px solid #ccc",
          background: theme.colors.body,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "1rem",
          outline: "none",
          transition: "opacity 500ms ease-in-out",
          opacity,
          padding: 0,
        },
      }}
    >
      <div
        style={{
          backgroundImage: `${getImgLinearGradient(
            theme.colors.body
          )}, url(${TMDB_IMG_BASE_URL}${content.backdrop_path})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: `${isDesktop ? "32rem" : "10rem"}`,
          padding: 0,
        }}
      ></div>
    </Modal>
  ) : (
    <></>
  );
};
