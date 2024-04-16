import styled from "@emotion/styled";
import Star from "src/assets/Star.svg?react";
import EmptyStar from "src/assets/EmptyStar.svg?react";

const StarsWrap = styled.p({
  display: "flex",
  alignItems: "center",
  gap: 4,
  height: 16,
});

export const Stars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < Math.round(rating)) {
      return <Star key={i} />;
    }
    return <EmptyStar key={i} />;
  });
  return <StarsWrap>{stars}</StarsWrap>;
};
