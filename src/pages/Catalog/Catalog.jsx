import { useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { MagnifyingGlass } from "react-loader-spinner";
import { fetchAdverts } from "src/store/adverts/operations";
import {
  getAdvertsToShow,
  getAdvertsPage,
  getAdvertsLoading,
} from "src/store/adverts/selectors";
import { setPage, setFilter } from "src/store/adverts/advertsSlice";
import { openModal } from "src/store/modal/modalSlice";
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

const LoaderStyled = styled(MagnifyingGlass)({
  marginLeft: "auto",
  marginRight: "auto",
});

const buttonStyle = css({
  width: 147,
  margin: "auto",
  marginTop: 50,
});

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdvertsToShow);
  const isAdvertsLoading = useSelector(getAdvertsLoading);
  const page = useSelector(getAdvertsPage);

  console.log("isAdvertsLoading", isAdvertsLoading);
  useEffect(() => {
    const promise = dispatch(fetchAdverts());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const handlerPage = () => {
    dispatch(setPage(page + 1));
  };

  const handelFilter = (data) => {
    dispatch(setFilter(data));
  };

  return (
    <CatalogWrapStyled>
      <FilterForm onSubmit={handelFilter} />
      <AddCardWrapStyled>
        <LoaderStyled
          visible={isAdvertsLoading}
          height="80"
          width="890"
          ariaLabel="magnifying-glass-loading"
          glassColor="#c0efff"
          color="#e15b64"
        />
        {!isAdvertsLoading &&
          adverts.map((advert) => (
            <AdCard
              key={advert._id}
              advert={advert}
              onShowMore={() => dispatch(openModal(advert._id))}
            />
          ))}
        {!isAdvertsLoading && (
          <Button
            css={buttonStyle}
            type="button"
            secondary
            onClick={handlerPage}
          >
            Load more
          </Button>
        )}
      </AddCardWrapStyled>
    </CatalogWrapStyled>
  );
};

export default Catalog;
