import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { rootStyle } from "src/styles/global";

const InputStyled = styled.input(({ leftIcon, wrightIcon }) => ({
  display: "flex",
  paddingTop: 18,
  paddingBottom: 18,
  paddingLeft: leftIcon ? 42 : 18,
  paddingRight: wrightIcon ? 42 : 18,
  gap: 8,
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
}));

const LabelStyled = styled.label({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  color: rootStyle.color.black_60,
  lineHeight: 1.5,

  path: {
    stroke: rootStyle.color.black_60,
  },

  ":focus-within": {
    path: {
      stroke: rootStyle.color.black,
    },
  },
});

const iconStyle = css({
  position: "absolute",
  transform: "translateY(-50%)",
  bottom: 8,
});

const writeIconStyle = css(
  {
    right: 18,
  },
  iconStyle
);

const leftIconStyle = css(
  {
    left: 18,
  },
  iconStyle
);

export const Input = ({
  label,
  leftIcon = false,
  wrightIcon = false,
  icon: Icon,
  ...props
}) => {
  console.log(1, { leftIcon, Icon });
  return (
    <LabelStyled>
      {label}
      {(leftIcon || wrightIcon) && (
        <Icon css={wrightIcon ? writeIconStyle : leftIconStyle} />
      )}
      <InputStyled {...props} leftIcon={leftIcon} wrightIcon={wrightIcon} />
    </LabelStyled>
  );
};
