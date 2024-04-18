import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "src/store/adverts/operations";
import { getAdverts } from "src/store/adverts/selectors";
import { AdCard } from "src/components/AdCard/AdCard";
import { FilterForm } from "src/components/FilterForm/FilterForm";

const CatalogWrapStyled = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const AddCardWrapStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    const promise = dispatch(fetchAdverts());
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  return (
    <CatalogWrapStyled>
      <FilterForm />
      <AddCardWrapStyled>
        {adverts.map((advert) => (
          <AdCard key={advert._id} advert={advert} />
        ))}
      </AddCardWrapStyled>
    </CatalogWrapStyled>
  );
};

export default Catalog;
