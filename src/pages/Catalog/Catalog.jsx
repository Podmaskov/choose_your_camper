import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "src/store/adverts/operations";
import { getAdvertsToShow, getAdvertsPage } from "src/store/adverts/selectors";
import { setPage } from "src/store/adverts/advertsSlice";
import { AdCard } from "src/components/AdCard/AdCard";
import { FilterForm } from "src/components/FilterForm/FilterForm";
import { Button } from "src/components/shared";

const CatalogWrapStyled = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const AddCardWrapStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  paddingBottom: 100,
  gap: 32,
});

const buttonStyle = css({
  width: 147,
  margin: "auto",
  marginTop: 50,
});

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdvertsToShow);
  const page = useSelector(getAdvertsPage);

  useEffect(() => {
    const promise = dispatch(fetchAdverts());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const handlerPage = () => {
    dispatch(setPage(page + 1));
  };
  return (
    <CatalogWrapStyled>
      <FilterForm />
      <AddCardWrapStyled>
        {adverts.map((advert) => (
          <AdCard key={advert._id} advert={advert} />
        ))}
        <Button css={buttonStyle} type="button" secondary onClick={handlerPage}>
          Load more
        </Button>
      </AddCardWrapStyled>
    </CatalogWrapStyled>
  );
};

export default Catalog;
