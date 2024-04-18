import { styles } from "./styles";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "src/store/favorites/favoritesSlice";

import { getFavorites } from "src/store/favorites/selectors";
import {
  Rating,
  Button,
  Located,
  CarOptionList,
  BigText,
} from "src/components/shared";
import Heart from "src/assets/Heart.svg?react";
import HeartRed from "src/assets/HeartRed.svg?react";

const FavoriteButton = styled.button({
  display: "flex",
  fontSize: 0,
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
});

export const AdCard = ({ advert }) => {
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

  const handleFavorite = () => {
    if (favorites.includes(_id)) {
      dispatch(removeFavorite(_id));
    } else {
      dispatch(addFavorite(_id));
    }
  };
  return (
    <div style={{ width: 890 }}>
      <div css={styles.wrapper}>
        <img css={styles.image} src={gallery[0]} alt="Car" />
        <div>
          <div css={styles.nameAndPriceWrap}>
            <BigText>{name}</BigText>
            <div css={styles.priceWrap}>
              <BigText>{`€${price}`}</BigText>
              <FavoriteButton type="button" onClick={handleFavorite}>
                {favorites.includes(_id) ? <HeartRed /> : <Heart />}
              </FavoriteButton>
            </div>
          </div>
          <div css={styles.ratingAndLocationWrap}>
            <Rating rating={rating} reviews={reviews.length} />
            <Located text={location} />
          </div>
          <p css={styles.descriptionText}>{description}</p>
          <CarOptionList carOptions={details} />
          <Button>Show more</Button>
        </div>
      </div>
    </div>
  );
};
