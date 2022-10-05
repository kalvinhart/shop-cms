import { useNewProduct } from "../../hooks/useNewProduct/useNewProduct";

import { Typography } from "@mui/material";
import Form from "../../../../common/components/Form/Form";
import ProductForm from "../ProductForm/ProductForm";

const NewProduct = () => {
  const { onSubmit } = useNewProduct();
  return (
    <>
      <Typography variant="h4" mb={4}>
        Add a Product
      </Typography>
      <Form component={ProductForm} submit={onSubmit} />
    </>
  );
};

export default NewProduct;
