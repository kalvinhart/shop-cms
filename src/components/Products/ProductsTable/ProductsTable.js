import { useProductsTable } from "../../../hooks/useProductTable/useProductsTable";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

const ProductsTable = ({ products }) => {
  const {
    columns,
    rows,
    buttonIsDisabled,
    handleDelete,
    handleSelectionChange,
    goToEditPage,
    goToNewPage,
  } = useProductsTable(products);

  if (!products) return null;

  return (
    <Box sx={{ width: 1200, height: 600, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: 350,
          alignSelf: "flex-end",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Button variant="contained" sx={{ marginRight: "auto" }} onClick={goToNewPage}>
          Add Product
        </Button>
        <Button
          variant="outlined"
          sx={{ marginRight: "10px" }}
          onClick={goToEditPage}
          disabled={buttonIsDisabled}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDelete}
          disabled={buttonIsDisabled}
        >
          Delete
        </Button>
      </Box>
      <DataGrid
        columns={columns}
        rows={rows}
        checkboxSelection={true}
        onSelectionModelChange={handleSelectionChange}
      />
    </Box>
  );
};

export default ProductsTable;
