import styled from "@emotion/styled";
import { rootStyle } from "src/styles/global";
import MapPin from "src/assets/MapPin.svg?react";

export const Located = ({ text }) => {
  return (
    <LocatedStyled>
      <MapPin /> <span>{text}</span>
    </LocatedStyled>
  );
};

const LocatedStyled = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 4,
  fontWeight: 400,
  lineHeight: 1.5,

  path: {
    stroke: rootStyle.color.black,
    strokeOpacity: 1,
  },
});
