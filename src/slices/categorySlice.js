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
  "categories/createCategory",
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
    posting: false,
    categories: null,
    error: false,
  },
  reducers: {},
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
      })
      .addCase(createCategory.pending, (state, action) => {
        state.posting = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.posting = false;

        const { _id, name } = action.payload;

        if (state.categories) {
          state.categories.push({ _id, name });
        } else {
          state.categories = [{ _id, name }];
        }
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.posting = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
