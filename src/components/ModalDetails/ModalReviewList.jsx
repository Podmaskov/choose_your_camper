import styled from "@emotion/styled";

const ReviewListStyled = styled.ul({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  listStyle: "none",
  overflowY: "auto",
});

export const ModalReviewList = ({ children }) => {
  return <ReviewListStyled>{children}</ReviewListStyled>;
};
