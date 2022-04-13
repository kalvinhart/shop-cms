import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    error: false,
  },
  reducers: {
    getProducts: (state) => {},
    saveProduct: (state) => {},
    updateProduct: (state) => {},
    deleteProduct: (state) => {},
  },
});

export const { getProducts, saveProduct, updateProduct, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
