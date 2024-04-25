import styled from "@emotion/styled";
import Star from "src/assets/Star.svg?react";

export const Rating = ({ rating, reviews }) => {
  return (
    <RaringWrapStyled>
      <Star />
      {`${rating}(${reviews} Reviews)`}
    </RaringWrapStyled>
  );
};

const RaringWrapStyled = styled.p({
  display: "flex",
  alignItems: "center",
  gap: 4,
  fontWeight: 400,
  lineHeight: 1.5,
  textDecorationLine: "underline",
});
