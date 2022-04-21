import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: { product: productReducer, category: categoryReducer },
});
