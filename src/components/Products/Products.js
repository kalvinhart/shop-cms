import { Box, Paper, Typography } from "@mui/material";
import ProductForm from "./ProductForm/ProductForm";

const Products = () => {
  return (
    <Box>
      <Paper sx={{ display: "flex", flexDirection: "column", padding: "40px" }}>
        <Typography variant="h2" mb={4}>
          Add a Product
        </Typography>
        <ProductForm />
      </Paper>
    </Box>
  );
};

export default Products;
