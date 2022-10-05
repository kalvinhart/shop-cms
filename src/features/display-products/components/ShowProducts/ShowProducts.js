import { Typography } from "@mui/material";
import { useShowProducts } from "../../../../hooks/useShowProducts/useShowProducts";
import ProductsTable from "../ProductsTable/ProductsTable";

const ShowProducts = () => {
  const { products } = useShowProducts();

  if (!products) return null;

  return (
    <>
      <Typography variant="h4" mb={4}>
        All Products
      </Typography>
      <ProductsTable products={products} />
    </>
  );
};

export default ShowProducts;
