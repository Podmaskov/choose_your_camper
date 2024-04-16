import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";

const AvatarWrap = styled.div({
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

export const Avatar = ({ name }) => {
  return <AvatarWrap>{name[0].toUpperCase()}</AvatarWrap>;
};
