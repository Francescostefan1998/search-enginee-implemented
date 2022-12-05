export const ADD_TO_FAVOURITE_JOB = "ADD_TO_FAVOURITE_JOB";
export const REMOVE_FROM_FAVOURITE_JOB = "REMOVE_FROM_FAVOURITE_JOB";
export const GET_JOBS = "GET_JOBS";
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

export const getJobsAction = ({ query }) => {
  return async (dispatch, getState) => {
    console.log("Fetching the jobs from the API...");
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      let resp = await fetch(baseEndpoint + query + "&limit=20");
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs, // the reducer is just being given
          // the final result, the array of books! so it cannot fail :)
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
