import styled from "@emotion/styled";
import { rootStyle } from "../../../styles/global";

export const ButtonStyled = styled.button(({ secondary }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 200,
  fontWeight: 500,
  background: rootStyle.color.red,
  cursor: "pointer",
  transition: rootStyle.transition.general("background-color"),
  lineHeight: 1.5,
  letterSpacing: secondary ? -0.08 : "normal",
  padding: secondary ? "16px 32px" : "16px 60px",
  backgroundColor: secondary ? "transparent" : rootStyle.color.red,
  border: secondary ? `1px solid ${rootStyle.color.grey_20}` : "none",
  color: secondary ? rootStyle.color.black : rootStyle.color.white,
  ":hover": {
    backgroundColor: secondary ? "transparent" : rootStyle.color.redHover,
  },
}));

export const IconButtonStyled = styled.button({
  display: "flex",
  fontSize: 0,
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
});
