import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";

import AuthService from "../services/AuthService";
import { IAuthService } from "../services/AuthService/IAuthService";

const authApi = AuthService;

export const store = configureStore({
  reducer: { product: productReducer, category: categoryReducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: { authApi } },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface AsyncThunkConfig<T> {
  extra: {
    authApi: IAuthService;
  };
  rejectValue: T;
}
