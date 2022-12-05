import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobReducer from "../reducers/jobReducer";
import workReducer from "../reducers/workReducer";
const bigReducer = combineReducers({
  job: jobReducer,
  work: workReducer,
  /*

  store:{
    job:{
      content:[]
    }
  }
  */
});
const store = configureStore({
  reducer: bigReducer, // here there's place for just 1 value!
});
export default store;
