import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";

export const MODAL_TOGGLER_STATE = {
  features: "features",
  reviews: "reviews",
};
export const ModalToggler = ({ onClick, activeState }) => {
  return (
    <ModalTogglerWrapStyled>
      <ButtonsStyled
        isActive={activeState === MODAL_TOGGLER_STATE.features}
        type="button"
        onClick={() => onClick(MODAL_TOGGLER_STATE.features)}
      >
        Features
      </ButtonsStyled>
      <ButtonsStyled
        isActive={activeState === MODAL_TOGGLER_STATE.reviews}
        type="button"
        onClick={() => onClick(MODAL_TOGGLER_STATE.reviews)}
      >
        Reviews
      </ButtonsStyled>
    </ModalTogglerWrapStyled>
  );
};

const ModalTogglerWrapStyled = styled.div({
  display: "flex",
  gap: 40,
  alignItems: "top",
  paddingBottom: 26,
  position: "relative",
  ":after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    borderBottom: `1px solid ${rootStyle.color.black_20}`,
  },
});

const ButtonsStyled = styled.button(({ isActive }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.2,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  ":before": {
    width: "100%",
    opacity: isActive ? 1 : 0,
    content: '""',
    position: "absolute",
    zIndex: 1,
    bottom: -28,
    left: 0,
    height: 5,
    backgroundColor: rootStyle.color.red,
    transition: rootStyle.transition.general("opacity"),
  },
}));
