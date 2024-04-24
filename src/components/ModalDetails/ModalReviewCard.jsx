import styled from "@emotion/styled";
// import { rootStyle } from "src/styles/global";
import { Avatar, Stars, DescriptionText } from "src/components/shared";

const ReviewCardStyled = styled.li({
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

const CardHeaderStyled = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

const NameStarsWrapStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

const NameTextStyled = styled.p({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 1.3,
});

export const ModalReviewCard = ({ name, rating, description }) => {
  return (
    <ReviewCardStyled>
      <CardHeaderStyled>
        <Avatar name={name} />
        <NameStarsWrapStyled>
          <NameTextStyled>{name}</NameTextStyled>
          <Stars rating={rating} />
        </NameStarsWrapStyled>
      </CardHeaderStyled>
      <DescriptionText>{description}</DescriptionText>
    </ReviewCardStyled>
  );
};
