import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { getFavorites } from "src/store/favorites/selectors";
import { openModal } from "src/store/modal/modalSlice";

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
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  return (
    <FavoritesWrapStyled>
      {favorites.map((advert) => (
        <AdCard
          key={advert._id}
          advert={advert}
          onShowMore={() => dispatch(openModal(advert._id))}
        />
      ))}
    </FavoritesWrapStyled>
  );
}

export default Favorites;
