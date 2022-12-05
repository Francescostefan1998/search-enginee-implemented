import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobReducer from "../reducers/jobReducer";

const bigReducer = combineReducers({
  job: jobReducer,
});
const store = configureStore({
  reducer: bigReducer, // here there's place for just 1 value!
});
export default store;
