/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { css } from "@emotion/react";
import { rootStyle } from "src/styles/global";
const labelStyle = {
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
};
const textStyle = {
  color: rootStyle.color.black,
  textAlign: "center",
  margin: 0,
  lineHeight: 1.25,
};

const hideCheckbox = {
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
};

const infoBlock = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
};

export const FilterBtn = forwardRef(({ label, icon: Icon, ...props }, ref) => {
  return (
    <label css={css(labelStyle)}>
      <div css={css(infoBlock)}>
        <Icon />
        <p css={css(textStyle)}>{label}</p>
        <input ref={ref} css={css(hideCheckbox)} {...props} />
      </div>
    </label>
  );
});
