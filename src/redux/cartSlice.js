import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  alert: null,
  subTotal: 0,
};

const calculateSubTotal = (cartItems) => {
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.cartItems.push(tempProduct);
      }
      state.subTotal = calculateSubTotal(state.cartItems);
      state.alert = "Product added to cart!";
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.subTotal = calculateSubTotal(state.cartItems);
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        state.subTotal = calculateSubTotal(state.cartItems);
      }
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        state.subTotal = calculateSubTotal(state.cartItems);
      }
    },
    removeAlert: (state) => {
      state.alert = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  removeAlert,
} = cartSlice.actions;

export default cartSlice.reducer;
