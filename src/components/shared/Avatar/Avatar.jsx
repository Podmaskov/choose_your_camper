import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";

export const Avatar = ({ name }) => {
  return <AvatarWrapStyled>{name[0].toUpperCase()}</AvatarWrapStyled>;
};

const AvatarWrapStyled = styled.div({
  width: 60,
  height: 60,
  borderRadius: "50%",
  backgroundColor: rootStyle.color.lightGrey,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: rootStyle.color.red,
  fontSize: 24,
  lineHeight: 1.2,
});
