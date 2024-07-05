import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL =
  "https://667d55a2297972455f64a5d2.mockapi.io/api/fitness/products";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(`${API_URL}`);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    searchQuery: "",
    filteredItems: [],
    selectedCategories: [], // Yeni durum alanı
  },
  reducers: {
    filterProducts: (state, action) => {
      state.searchQuery = action.payload.query;
      state.selectedCategories = action.payload.categories;

      state.filteredItems = state.items.filter((product) => {
        const matchesSearchQuery = product.name
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase());
        const matchesCategory =
          state.selectedCategories.length === 0 ||
          state.selectedCategories.includes(product.category);

        return matchesSearchQuery && matchesCategory;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
