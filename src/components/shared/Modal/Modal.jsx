import { useEffect } from "react";
import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";
import { Portal } from "src/components/shared";

const Overlay = styled.div({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  backgroundColor: rootStyle.color.overlay,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Modal = ({ children, isModalOpen, closeModal }) => {
  useEffect(() => {
    const handlerEscPress = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.body.addEventListener("keydown", handlerEscPress);
    }

    return () => {
      document.body.removeEventListener("keydown", handlerEscPress);
    };
  }, [isModalOpen, closeModal]);

  return isModalOpen ? (
    <Portal>
      <Overlay onClick={(e) => e.target === e.currentTarget && closeModal()}>
        {children}
      </Overlay>
    </Portal>
  ) : null;
};
