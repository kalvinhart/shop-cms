import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../slices/categorySlice";

export const useProductsPage = () => {
  const dispatch = useDispatch();
  const {
    loading: categoryLoading,
    categories,
    error: categoryError,
  } = useSelector((state) => state.category);

  useEffect(() => {
    if (!categoryLoading && !categories) {
      dispatch(loadCategories());
    }
  }, [dispatch, loadCategories]);

  return {
    categoryLoading,
    categoryError,
  };
};
