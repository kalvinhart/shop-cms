import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CircularProgress, Typography } from "@mui/material";
import Form from "../shared/Form/Form";
import ProductForm from "./ProductForm/ProductForm";
import { loadCategories } from "../../slices/categorySlice";

const Products = () => {
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {categoryLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="h2" mb={4}>
            Add a Product
          </Typography>
          <Form component={ProductForm} submit={onSubmit} />
        </>
      )}
    </>
  );
};

export default Products;
