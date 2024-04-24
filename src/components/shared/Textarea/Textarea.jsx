/* eslint-disable react/display-name */
import { forwardRef } from "react";
import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";

const TextareaStyled = styled.textarea({
  padding: 18,
  height: 114,
  width: "100%",
  resize: "none",
  borderRadius: 10,
  background: rootStyle.color.ultraLightGrey,
  border: "none",
  outlineOffset: -5,
  outlineStyle: "none",
  outlineColor: rootStyle.color.ultraLightGrey,
  lineHeight: 1.25,
  "::placeholder": {
    color: rootStyle.color.black_60,
  },
});

const LabelStyled = styled.label({
  color: rootStyle.color.black_60,
  lineHeight: 1.5,
});

export const Textarea = forwardRef(({ label, ...props }, ref) => {
  return (
    <LabelStyled>
      {label}
      <TextareaStyled ref={ref} {...props} />
    </LabelStyled>
  );
});
