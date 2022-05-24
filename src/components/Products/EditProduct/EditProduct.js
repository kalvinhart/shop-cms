import { useEditProduct } from "../../../hooks/useEditProduct/useEditProduct";

import { Typography } from "@mui/material";
import Form from "../../shared/Form/Form";
import ProductForm from "../ProductForm/ProductForm";

const EditProduct = () => {
  const { defaultValues, submitForm } = useEditProduct();

  return (
    <>
      <Typography variant="h2" mb={4}>
        Edit a Product
      </Typography>
      <Form
        component={ProductForm}
        submit={submitForm}
        defaultValues={defaultValues}
      ></Form>
    </>
  );
};

export default EditProduct;
