import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAdverts } from "src/store/adverts/operations";
import { AdCard } from "src/components/AdCard/AdCard";
import { FilterForm } from "src/components/FilterForm/FilterForm";

const CatalogWrapStyled = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchAdverts());
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  return (
    <CatalogWrapStyled>
      <FilterForm />
      <AdCard />
    </CatalogWrapStyled>
  );
};

export default Catalog;
