export const ADD_TO_FAVOURITE_JOB = "ADD_TO_FAVOURITE_JOB";
export const REMOVE_FROM_FAVOURITE_JOB = "REMOVE_FROM_FAVOURITE_JOB";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
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

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    console.log("Fetching the jobs from the API...");

    try {
      let resp = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
      );
      console.log(resp);
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs.data, // the reducer is just being given
          // the final result, the array of books! so it cannot fail :)
        });
        setTimeout(() => {
          // this action will just turn false the isLoading variable in the book slice
          dispatch({
            type: GET_JOBS_LOADING,
            payload: false,
          });
        }, 1000);
      } else {
        console.log("error");
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
    }
  };
};
