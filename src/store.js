import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cart/cartSlice";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
