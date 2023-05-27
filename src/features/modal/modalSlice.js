import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOPen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOPen = true;
    },
    closeModal: (state, action) => {
      state.isOPen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
