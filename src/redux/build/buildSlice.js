// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  CPU: null,
  Motherboard: null,
  RAM: null,
  "Power Supply Unit": null,
  "Storage": null,
  Monitor: null,
};

const productSlice = createSlice({
  name: 'build',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { category, product } = action.payload;
      if (state.hasOwnProperty(category)) {
        state[category] = product;
      }
    },
    removeProduct: (state, action) => {
      const { category } = action.payload;
      if (state.hasOwnProperty(category)) {
        state[category] = null;
      }
    },
    resetBuild: (state) => {
      return initialState;
    },
  },
});

export const { addProduct, removeProduct, resetBuild } = productSlice.actions;
export default productSlice.reducer;
