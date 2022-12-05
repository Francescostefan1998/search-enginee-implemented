import { GET_JOBS } from "../actions";

const initialState = {
  stock: [],
};

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default workReducer;
