import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../utils/axios";

export const createNewProduct = createAsyncThunk(
  "product/createNewProduct",
  async (data) => {
    const {
      name,
      brand,
      desc: description,
      size,
      color,
      categories,
      price,
      stockQty,
      image,
    } = data;

    try {
      const newProduct = {
        name,
        brand,
        description,
        size,
        color,
        categories: [categories],
        price,
        stockQty,
      };

      const { data: product } = await Axios.post("/products/new", newProduct);

      let updatedProduct;

      if (image.length > 0) {
        const toUpload = new FormData();
        toUpload.append("id", product._id);
        toUpload.append("image", image[0], image[0].name);

        const {
          data: { imageUrl },
        } = await Axios.post("/upload", toUpload);

        const { data } = await Axios.patch(`/products/${product._id}`, {
          imageUrl,
        });
        updatedProduct = data.updatedProduct;
      }

      return image.length > 0 ? updatedProduct : product;
    } catch (err) {
      console.log(err);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    posting: false,
    products: null,
    error: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createNewProduct.pending, (state, action) => {
        state.posting = true;
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.posting = false;

        if (state.products) {
          state.products.push(action.payload);
        } else {
          state.products = [action.payload];
        }
      })
      .addCase(createNewProduct.rejected, (state, action) => {
        state.posting = false;
        state.error = action.error;
      });
  },
});

export default productSlice.reducer;
