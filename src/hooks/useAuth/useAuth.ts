import { useCallback } from "react";

import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";

import { signIn } from "../../app/slices/authSlice";

import { UserCredentials } from "../../types/Auth";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { error, loading, user } = useAppSelector((state) => state.auth);

  const signInUser = useCallback(
    (credentials: UserCredentials) => {
      dispatch(signIn(credentials));
    },
    [dispatch]
  );

  return {
    authLoading: loading,
    authError: error,
    user,
    signIn: signInUser,
  };
};
