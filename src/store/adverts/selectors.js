import { createSelector } from "reselect";
export const getAdverts = (state) => state.adverts.items;
export const getAdvertsPage = (state) => state.adverts.page;
export const getAdvertsLoading = (state) => state.adverts.loading;
export const getAdvertsError = (state) => state.adverts.error;

export const getAdvertsToShow = createSelector(
  [getAdverts, getAdvertsPage],
  (adverts, page) => {
    const numberAddedItems = 4;
    return adverts.slice(0, numberAddedItems * page);
  }
);
