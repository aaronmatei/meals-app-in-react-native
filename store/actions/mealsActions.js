export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

// action creator function for toggle favorite
export const toggleFavorite = id => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};
// action creator function for filter setting
export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings };
};
