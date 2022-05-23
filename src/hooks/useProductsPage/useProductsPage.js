import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../slices/categorySlice";
import { loadAllProducts } from "../../slices/productSlice";

export const useProductsPage = () => {
  const dispatch = useDispatch();
  const {
    loading: categoryLoading,
    categories,
    error: categoryError,
  } = useSelector((state) => state.category);

  const {
    loading: productsLoading,
    products,
    error: productsError,
  } = useSelector((state) => state.product);

  useEffect(() => {
    if (!categoryLoading && !categories) {
      dispatch(loadCategories());
    }
  }, [categoryLoading, dispatch, categories, loadCategories]);

  useEffect(() => {
    if (!productsLoading && !products) {
      dispatch(loadAllProducts());
    }
  }, [productsLoading, dispatch, products, loadAllProducts]);

  return {
    categoryLoading,
    categoryError,
    productsLoading,
    productsError,
  };
};
