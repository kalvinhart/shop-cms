import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadCategories, createCategory } from "../../app/slices/categorySlice";

import { Box, Typography } from "@mui/material";
import Spinner from "../../common/components/Spinner/Spinner";
import Form from "../../common/components/Form/Form";
import CategoryForm from "../../features/category-forms/components/CategoryForm/CategoryForm";

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
          <Typography variant="h4" mb={3}>
            Add a Category
          </Typography>
          <Form component={CategoryForm} submit={onSubmit} />
        </>
      )}
    </Box>
  );
};

export default Categories;
