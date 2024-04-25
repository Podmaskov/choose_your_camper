/* eslint-disable react/display-name */
import { forwardRef } from "react";
import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";

export const FilterBtn = forwardRef(({ label, icon: Icon, ...props }, ref) => {
  return (
    <LabelStyled>
      <BoxStyled>
        <Icon width={32} height={32} />
        <TextStyled>{label}</TextStyled>
        <HidedCheckboxStyled ref={ref} {...props} />
      </BoxStyled>
    </LabelStyled>
  );
});

const LabelStyled = styled.label({
  display: "flex",
  justifyContent: "center",
  width: 112,
  height: 95,
  alignItems: "center",
  gap: "8px",
  borderRadius: 10,
  border: `1px solid ${rootStyle.color.black_20}`,
  cursor: "pointer",
  ':has(input[type="checkbox"]:checked)': {
    border: `1px solid ${rootStyle.color.red}`,
  },
  ':has(input[type="radio"]:checked)': {
    border: `1px solid ${rootStyle.color.red}`,
  },
});

const TextStyled = styled.p({
  color: rootStyle.color.black,
  textAlign: "center",
  margin: 0,
  lineHeight: 1.25,
});

const HidedCheckboxStyled = styled.input({
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  whiteSpace: "nowrap",
  clipPath: "inset(100%)",
  clip: "rect(0 0 0 0)",
  overflow: "hidden",
});

const BoxStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
});
