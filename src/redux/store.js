import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import buildReducer from './build/buildSlice';

export default configureStore({
  reducer: { 
    [apiSlice.reducerPath]: apiSlice.reducer ,
    build: buildReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
