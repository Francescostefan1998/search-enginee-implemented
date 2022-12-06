import { GET_JOBS, GET_JOBS_LOADING, GET_JOBS_ERROR } from "../actions";

const initialState = {
  stock: [],
  isLoading: true,
  isError: false,
};

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        stock: action.payload,
      };
    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        // isLoading: !state.isLoading, this is an example for making this
        // work without an explicit payload for the action of type GET_BOOKS_LOADING
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default workReducer;
