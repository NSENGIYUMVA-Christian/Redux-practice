import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

// state values
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  loading: true,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
  },
});

//console.log(cartslice);

// exports
export const { clearCart, removeItem, increase, decrease } = cartslice.actions;

export default cartslice.reducer;
