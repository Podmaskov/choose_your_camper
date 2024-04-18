import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAdverts } from "src/store/adverts/operations";
import { AdCard } from "src/components/AdCard/AdCard";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchAdverts());
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  return (
    <div>
      <AdCard />
    </div>
  );
};

export default Catalog;
