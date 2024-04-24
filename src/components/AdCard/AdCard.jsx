import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "src/store/favorites/favoritesSlice";

import { getFavorites } from "src/store/favorites/selectors";
import {
  Rating,
  Button,
  IconButton,
  Located,
  CarOptionList,
  BigText,
  DescriptionText,
  Image,
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
      console.log("removeFavorite");
      dispatch(removeFavorite(_id));
    } else {
      dispatch(addFavorite(advert));
    }
  };
  return (
    <div style={{ width: 890 }}>
      <div css={styles.wrapper}>
        <Image src={gallery[0]} alt="car" />
        <div>
          <div css={styles.nameAndPriceWrap}>
            <BigText>{name}</BigText>
            <div css={styles.priceWrap}>
              <BigText>{`€${price}`}</BigText>
              <IconButton type="button" onClick={handleFavorite}>
                {isAddedToFavorites ? <HeartRed /> : <Heart />}
              </IconButton>
            </div>
          </div>
          <div css={styles.ratingAndLocationWrap}>
            <Rating rating={rating} reviews={reviews.length} />
            <Located text={location} />
          </div>
          <DescriptionText whiteSpace width={525} height={24}>
            {description}
          </DescriptionText>
          <CarOptionList carOptions={details} />
          <Button type="button" onClick={onShowMore}>
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};
