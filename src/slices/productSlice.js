import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import Axios from "../utils/axios";

export const loadAllProducts = createAsyncThunk("product/loadAllProducts", async () => {
  try {
    const {
      data: { products },
    } = await Axios.post("/products");
    console.log(products);
    return products;
  } catch (err) {
    console.log(err);
  }
});

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
        const imageInfo = {
          id: product._id,
          name: image[0].name,
        };

        const {
          data: { url },
        } = await Axios.post("/upload/s3url", imageInfo);

        await Axios.put(url, image[0]);

        const imageUrl = url.split("?")[0];

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
      })
      .addCase(loadAllProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(loadAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default productSlice.reducer;
