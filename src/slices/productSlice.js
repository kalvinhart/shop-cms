import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../utils/axios";

export const createProduct = createAsyncThunk("product/saveProduct", async (data) => {
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

    if (image.length > 0) {
      const toUpload = new FormData();
      toUpload.append("id", product._id);
      toUpload.append("image", image[0], image[0].name);

      const {
        data: { imageUrl },
      } = await Axios.post("/upload", toUpload);

      const { data: updatedProduct } = await Axios.patch(`/products/${product._id}`, {
        imageUrl,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    posting: false,
    products: null,
    error: false,
  },
  reducers: {
    getProducts: (state) => {},
    saveProduct: (state, { payload }) => {
      if (state.products) {
        state.products.push(payload);
      } else {
        state.products = payload;
      }
    },
    updateProduct: (state) => {},
    deleteProduct: (state) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(createProduct.pending, (state, action) => {
        state.posting = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.posting = false;

        if (state.categories) {
          state.categories.push(action.payload);
        } else {
          state.categories = [action.payload];
        }
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.posting = false;
        state.error = action.error;
      });
  },
});

export const { getProducts, saveProduct, updateProduct, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
