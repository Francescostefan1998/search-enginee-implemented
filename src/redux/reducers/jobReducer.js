import { ADD_TO_FAVOURITE_JOB, REMOVE_FROM_FAVOURITE_JOB } from "../actions";

const initialState = {
  content: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE_JOB:
      return {
        ...state,

        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVOURITE_JOB:
      return {
        ...state,

        content: state.content.filter((job, i) => {
          return i !== action.payload;
        }),
      };

    default:
      return state;
  }
};
export default jobReducer;
