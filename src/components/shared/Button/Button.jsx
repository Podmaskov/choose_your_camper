import styled from "@emotion/styled";
import { rootStyle } from "../../../styles/global";

export const Button = styled.button(({ secondary }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 200,
  background: rootStyle.color.red,
  lineHeight: 1.6,
  cursor: "pointer",
  transition: rootStyle.transition.general("background-color"),
  padding: secondary ? "16px 32px" : "16px 60px",
  backgroundColor: secondary ? "transparent" : rootStyle.color.red,
  border: secondary ? `1px solid ${rootStyle.color.grey_20}` : "none",
  color: secondary ? rootStyle.color.black : rootStyle.color.white,
  ":hover": {
    backgroundColor: secondary ? "transparent" : rootStyle.color.redHover,
  },
}));
