import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../store";
import { User, UserCredentials } from "../../types/Auth";

type InitialState = {
  loading: boolean;
  error: string;
  user: User;
};

const initialState: InitialState = {
  loading: false,
  error: "",
  user: {
    email: "",
    role: "",
    token: "",
  },
};

export const signIn = createAsyncThunk<User, UserCredentials, AsyncThunkConfig<any>>(
  "auth/signIn",
  async (
    { username, password }: UserCredentials,
    { rejectWithValue, extra: { authApi } }
  ) => {
    try {
      const data = await authApi.signIn({
        username,
        password,
      });

      localStorage.setItem("auth", JSON.stringify({ ...data }));

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      state.user = {
        email: "",
        role: "",
        token: "",
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
