import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { rootStyle } from "src/styles/global";
import {
  addFavorite,
  removeFavorite,
} from "src/store/favorites/favoritesSlice";

import { getFavorites } from "src/store/favorites/selectors";
import {
  Rating,
  ButtonStyled,
  IconButtonStyled,
  Located,
  CarOptionList,
  BigTextStyled,
  DescriptionTextStyled,
  ImageStyled,
} from "src/components/shared";
import Heart from "src/assets/Heart.svg?react";
import HeartRed from "src/assets/HeartRed.svg?react";

export const AdCard = ({ advert, onShowMore }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const {
    _id,
    name,
    price,
    rating,
    location,
    description,
    details,
    gallery,
    reviews,
  } = advert;

  const isAddedToFavorites = favorites.some((favorite) => favorite._id === _id);

  const handleFavorite = () => {
    if (isAddedToFavorites) {
      dispatch(removeFavorite(_id));
    } else {
      dispatch(addFavorite(advert));
    }
  };
  return (
    <WrapperStyled>
      <ImageStyled src={gallery[0]} alt="car" />
      <div>
        <NameAndPriceWrapStyled>
          <BigTextStyled>{name}</BigTextStyled>
          <PriceWrapStyled>
            <BigTextStyled>{`€${price}`}</BigTextStyled>
            <IconButtonStyled type="button" onClick={handleFavorite}>
              {isAddedToFavorites ? <HeartRed /> : <Heart />}
            </IconButtonStyled>
          </PriceWrapStyled>
        </NameAndPriceWrapStyled>
        <RatingAndLocationWrapStyled>
          <Rating rating={rating} reviews={reviews.length} />
          <Located text={location} />
        </RatingAndLocationWrapStyled>
        <DescriptionTextStyled whiteSpace width={525} height={24}>
          {description}
        </DescriptionTextStyled>
        <CarOptionList carOptions={details} />
        <ModalButtonStyled type="button" onClick={onShowMore}>
          Show more
        </ModalButtonStyled>
      </div>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div({
  width: 890,
  display: "flex",
  justifyContent: "space-between",
  gap: 24,
  padding: 24,
  borderRadius: 20,
  border: `1px solid ${rootStyle.color.black_20}`,
});

const NameAndPriceWrapStyled = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 8,
});

const PriceWrapStyled = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 12,
});

const ModalButtonStyled = styled(ButtonStyled)({
  padding: "16px 40px",
});

const RatingAndLocationWrapStyled = styled.div({
  display: "flex",
  gap: 16,
  marginBottom: 24,
});
