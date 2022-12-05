export const ADD_TO_FAVOURITE_JOB = "ADD_TO_FAVOURITE_JOB";
export const REMOVE_FROM_FAVOURITE_JOB = "REMOVE_FROM_FAVOURITE_JOB";

export const addToFavouriteAction = (jobSelected) => {
  return {
    type: ADD_TO_FAVOURITE_JOB,
    payload: jobSelected,
  };
};

export const removeFromFavouriteAction = (i) => ({
  type: REMOVE_FROM_FAVOURITE_JOB,
  payload: i,
});
