import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import cartItems from "../../cartItems";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

// state values
const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  loading: true,
};

//exporting url
export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  // return fetch(url)
  //   .then((resp) => resp.json())
  //   .catch((err) => console.log(err));
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return;
  }
});

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
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.loading = false;
      });
  },
});

//console.log(cartslice);

// exports
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartslice.actions;

export default cartslice.reducer;
