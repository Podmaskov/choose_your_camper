import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";

export const CarOption = ({ option }) => {
  const Icon = option.icon;
  return (
    <CarOptionWrapStyled>
      <Icon />
      <p>{option.label}</p>
    </CarOptionWrapStyled>
  );
};

const CarOptionWrapStyled = styled.li({
  width: "fit-content",
  display: "flex",
  padding: "12px 18px",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 8,
  borderRadius: 100,
  background: rootStyle.color.lightGrey,
});
