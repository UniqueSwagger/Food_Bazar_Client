import { configureStore } from "@reduxjs/toolkit";
import productFiltersReducer from "./slices/filterProductSlice";
export const store = configureStore({
  reducer: {
    productFilters: productFiltersReducer,
  },
});
