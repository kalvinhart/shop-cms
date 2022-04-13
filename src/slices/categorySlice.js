import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../utils/axios";

export const loadCategories = createAsyncThunk("categories/getCategories", async () => {
  try {
    const { data } = await Axios.get("/categories");
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const createCategory = createAsyncThunk(
  "categories/saveCategory",
  async ({ name }) => {
    try {
      const { data } = await Axios.post("/categories", { name });
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    loading: false,
    categories: null,
    error: false,
  },
  reducers: {
    getCategories: (state, { payload }) => {
      state.categories = payload;
    },
    saveCategory: (state, { payload }) => {
      if (state.categories) {
        state.categories.push(payload);
      } else {
        state.categories = payload;
      }
    },
    updateCategory: (state) => {},
    deleteCategory: (state) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(loadCategories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { getCategories, saveCategory, updateCategory, deleteCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
