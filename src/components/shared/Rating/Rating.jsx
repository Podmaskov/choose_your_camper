import styled from "@emotion/styled";
import Star from "src/assets/Star.svg?react";

const RaringWrap = styled.p({
  display: "flex",
  alignItems: "center",
  gap: 4,
  fontWeight: 400,
  lineHeight: 1.5,
  textDecorationLine: "underline",
});

export const Rating = ({ rating, reviews }) => {
  return (
    <RaringWrap>
      <Star />
      {`${rating}(${reviews} Reviews)`}
    </RaringWrap>
  );
};
