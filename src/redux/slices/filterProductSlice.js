import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://cryptic-journey-46422.herokuapp.com/categories"
    );
    return response.data;
  }
);
const filterProductSlice = createSlice({
  name: "productFilters",
  initialState: {
    categories: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default filterProductSlice.reducer;
