import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
export const store = configureStore({
  reducer: {
    cart: cardReducer,
    modal: modalReducer,
  },
});
