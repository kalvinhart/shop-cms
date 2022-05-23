import { useProductsTable } from "../../../hooks/useProductTable/useProductsTable";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

const ProductsTable = ({ products }) => {
  const { columns, rows, buttonIsDisabled, handleSelectionChange, goToEditPage } =
    useProductsTable(products);

  if (!products) return null;

  return (
    <div style={{ width: 1200, height: 600, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: 180,
          alignSelf: "flex-end",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Button variant="outlined" onClick={goToEditPage} disabled={buttonIsDisabled}>
          Edit
        </Button>
        <Button variant="outlined" color="error" disabled={buttonIsDisabled}>
          Delete
        </Button>
      </Box>
      <DataGrid
        columns={columns}
        rows={rows}
        checkboxSelection={true}
        onSelectionModelChange={handleSelectionChange}
      />
    </div>
  );
};

export default ProductsTable;
