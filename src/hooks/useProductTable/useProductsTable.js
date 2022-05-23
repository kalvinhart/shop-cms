import { useState } from "react";
import { useNavigate } from "react-router";

export const useProductsTable = (products) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const navigate = useNavigate();

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  const goToEditPage = () => {
    if (selectedRows.length === 0 || selectedRows.length > 1) return;
    const id = selectedRows[0];
    navigate(`/edit/${id}`);
  };

  const buttonIsDisabled = selectedRows.length === 0;

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "brand", headerName: "Brand", width: 200 },
    { field: "size", headerName: "Size", width: 80 },
    { field: "color", headerName: "Colour", width: 80 },
    { field: "category", headerName: "Category", width: 200 },
    { field: "price", headerName: "Price", width: 75 },
    { field: "quantity", headerName: "Quantity", width: 80 },
    { field: "amountSold", headerName: "Sales", width: 80 },
  ];

  const rows = products.map((product) => {
    const {
      _id: id,
      name,
      brand,
      size,
      color,
      price,
      stockQty: quantity,
      amountSold,
    } = product;

    const category = product.categories[0];

    return {
      id,
      name,
      brand,
      size,
      color,
      price,
      quantity,
      category,
      amountSold,
    };
  });

  return {
    rows,
    columns,
    buttonIsDisabled,
    handleSelectionChange: (newSelection) => handleSelectionChange(newSelection),
    goToEditPage: () => goToEditPage(),
  };
};
