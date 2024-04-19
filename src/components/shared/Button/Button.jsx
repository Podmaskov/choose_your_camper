import styled from "@emotion/styled";
import { rootStyle } from "../../../styles/global";

export const Button = styled.button(({ secondary }) => ({
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
