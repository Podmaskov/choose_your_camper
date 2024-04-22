import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";

export const BigText = styled.h2({
  fontSize: 24,
  fontWeight: 600,
  lineHeight: 1.25,
});

export const DescriptionText = styled.p(
  ({ whiteSpace = false, width = "auto", height = "auto" }) => ({
    width,
    height,
    overflow: "hidden",
    color: rootStyle.color.grey,
    whiteSpace: whiteSpace ? "nowrap" : "normal",
    textOverflow: "ellipsis",
    fontWeight: 400,
    lineHeight: 1.5,
    marginBottom: 24,
  })
);
