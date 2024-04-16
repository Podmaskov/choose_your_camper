import { css } from "@emotion/react";
import { rootStyle } from "src/styles/global";
const labelStyle = {
  display: "flex",
  justifyContent: "center",
  width: 115,
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

export function FilterBtn({ label, icon: Icon, ...props }) {
  return (
    <label css={css(labelStyle)}>
      <div css={css(infoBlock)}>
        <Icon />
        <p css={css(textStyle)}>{label}</p>
        <input css={css(hideCheckbox)} {...props} />
      </div>
    </label>
  );
}