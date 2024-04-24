import { createSelector } from "reselect";
import { getModalAdvertId } from "src/store/modal/selectors";
export const getAdverts = (state) => state.adverts.items;
export const getAdvertsFilter = (state) => state.adverts.filter;
export const getAdvertsPage = (state) => state.adverts.page;
export const getAdvertsLoading = (state) => state.adverts.isLoading;
export const getAdvertsError = (state) => state.adverts.error;

export const getAdvertById = createSelector(
  [getModalAdvertId, getAdverts],
  (advertId, adverts) => {
    console.log("advertId", advertId);
    return adverts.find((advert) => advert._id === advertId);
  }
);

export const getAdvertsToShow = createSelector(
  [getAdverts, getAdvertsFilter, getAdvertsPage],
  (adverts, filter, page) => {
    const numberAddedItems = 4;
    const isFilterApplied =
      !!filter.location || !!filter.form || !!filter.details.length;
    if (isFilterApplied) {
      let filteredData = [...adverts];

      if (filter.location) {
        const data = filteredData.filter((advert) => {
          return advert.location
            .toLowerCase()
            .includes(filter.location.toLowerCase());
        });
        filteredData = [...data];
      }

      if (filter.form) {
        const data = filteredData.filter((advert) => {
          return advert.form.toLowerCase() === filter.form.toLowerCase();
        });
        filteredData = [...data];
      }

      if (filter.details.length) {
        const data = filteredData.filter((advert) => {
          return filter.details.some((detail) => advert.details[detail]);
        });
        filteredData = [...data];
      }
      return filteredData.slice(0, numberAddedItems * page);
    } else {
      return adverts.slice(0, numberAddedItems * page);
    }
  }
);
