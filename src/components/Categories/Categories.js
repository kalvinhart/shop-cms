import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadCategories, createCategory } from "../../app/slices/categorySlice";

import { Box, Typography } from "@mui/material";
import Spinner from "../shared/Spinner/Spinner";
import Form from "../shared/Form/Form";
import CategoryForm from "./CategoryForm/CategoryForm";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, categories, error } = useSelector((state) => state.category);

  useEffect(() => {
    if (!loading && !categories) {
      dispatch(loadCategories());
    }
  }, [dispatch, loadCategories]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createCategory(data));
  };

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Typography variant="h2" mb={3}>
            Add a Category
          </Typography>
          <Form component={CategoryForm} submit={onSubmit} />
        </>
      )}
    </Box>
  );
};

export default Categories;
