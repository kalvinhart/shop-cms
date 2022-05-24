import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import Axios from "../utils/axios";
import { uploadImage } from "../utils/uploadImage";

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
        updatedProduct = await uploadImage(product, image);
      }

      return image.length > 0 ? updatedProduct : product;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateProduct = createAsyncThunk("product/updateProduct", async (data) => {
  console.log(data);
  const {
    _id: id,
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

  const newDetails = {
    name,
    brand,
    description,
    size,
    color,
    categories,
    price,
    stockQty,
  };

  try {
    const { data } = await Axios.patch(`/products/${id}`, newDetails);
    console.log(data);
    const imageIsObject = typeof image === "object";

    let updatedProduct;

    if (imageIsObject) {
      updatedProduct = await uploadImage(data, image);
    }

    return imageIsObject ? updatedProduct : data;
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
  reducers: {},
  extraReducers(builder) {
    builder
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
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.posting = false;

        if (state.products) {
          state.products.push(action.payload);
        } else {
          state.products = [action.payload];
        }
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.posting = false;
        state.products = state.products.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          } else {
            return item;
          }
        });
      })
      .addMatcher(
        isAnyOf(createNewProduct.pending, updateProduct.pending),
        (state, action) => {
          state.posting = true;
        }
      )
      .addMatcher(
        isAnyOf(createNewProduct.rejected, updateProduct.rejected),
        (state, action) => {
          state.posting = false;
          state.error = true;
        }
      );
  },
});

export default productSlice.reducer;
