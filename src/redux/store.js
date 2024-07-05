import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import cartReducer from "./cartSlice.js";
import wishListReducer from "./wishListSlice.js";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
  },
});

export default store;
