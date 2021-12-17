import { configureStore } from "@reduxjs/toolkit";
import productFiltersReducer from "./slices/filterProductSlice";
import productsReducer from "./slices/allProductSlice";
export const store = configureStore({
  reducer: {
    productFilters: productFiltersReducer,
    products: productsReducer,
  },
});
