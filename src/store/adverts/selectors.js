import { createSelector } from "reselect";
import { getModalAdvertId } from "src/store/modal/selectors";
import { getFavorites } from "src/store/favorites/selectors";

const NUMBER_ADDED_ITEMS = 4;

export const getAdverts = (state) => state.adverts.items;
export const getAdvertsFilter = (state) => state.adverts.filter;
export const getAdvertsPage = (state) => state.adverts.page;
export const getAdvertsLoading = (state) => state.adverts.isLoading;
export const getAdvertsError = (state) => state.adverts.error;

export const getAdvertById = createSelector(
  [getModalAdvertId, getAdverts, getFavorites],
  (advertId, adverts, favorites) => {
    if (adverts.length) {
      return adverts.find((advert) => advert._id === advertId);
    } else {
      return favorites.find((advert) => advert._id === advertId);
    }
  }
);

export const getAdvertsToShow = createSelector(
  [getAdverts, getAdvertsFilter, getAdvertsPage],
  (adverts, filter, page) => {
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
      return filteredData.slice(0, NUMBER_ADDED_ITEMS * page);
    } else {
      return adverts.slice(0, NUMBER_ADDED_ITEMS * page);
    }
  }
);

export const getIsLoadButtonVisible = createSelector(
  [getAdvertsToShow, getAdvertsPage],
  (getAdvertsToShow, page) => {
    console.log({ getAdvertsToShow, page });
    return getAdvertsToShow.length >= NUMBER_ADDED_ITEMS * page;
  }
);
