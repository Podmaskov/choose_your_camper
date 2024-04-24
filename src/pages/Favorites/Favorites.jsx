import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { getFavorites } from "src/store/favorites/selectors";
import { getAdverts } from "src/store/adverts/selectors";

import { AdCard } from "src/components/AdCard/AdCard";

const FavoritesWrapStyled = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingBottom: 100,
  gap: 32,
});

function Favorites() {
  const adverts = useSelector(getAdverts);
  const favorites = useSelector(getFavorites);

  const favoriteAdverts = adverts.filter((advert) =>
    favorites.includes(advert._id)
  );
  return (
    <FavoritesWrapStyled>
      {favoriteAdverts.map((advert) => (
        <AdCard key={advert._id} advert={advert} />
      ))}
    </FavoritesWrapStyled>
  );
}

export default Favorites;
