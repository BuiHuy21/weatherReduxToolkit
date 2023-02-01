import { combineReducers } from "@reduxjs/toolkit";

import weatherSlice from "./weatherSlice";

export const reducer = combineReducers({
  weathers: weatherSlice,
});
