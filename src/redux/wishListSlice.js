import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wlItems: [],
  alert: null,
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.wlItems.push(action.payload);
      state.alert = `Product added to wishlist: ${action.payload.name}`;
    },
    removeFromWishList: (state, action) => {
      state.wlItems = state.wlItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.alert = `Product removed from wishlist: ${action.payload.name}`;
    },
    removeWishListAlert: (state) => {
      state.alert = null;
    },
  },
});

export const { addToWishList, removeFromWishList, removeWishListAlert } =
  wishListSlice.actions;
export default wishListSlice.reducer;
