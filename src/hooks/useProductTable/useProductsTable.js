import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { deleteProducts, deleteSingleProduct } from "../../app/slices/productSlice";

export const useProductsTable = (products) => {
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState([]);

  const navigate = useNavigate();

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  const goToEditPage = () => {
    if (selectedRows.length === 0 || selectedRows.length > 1) return;
    const id = selectedRows[0];
    navigate(`/products/edit/${id}`);
  };

  const goToNewPage = () => {
    navigate("/products/new");
  };

  const handleDelete = () => {
    console.log(selectedRows);
    if (selectedRows.length === 0) return;

    if (selectedRows.length > 1) {
      dispatch(deleteProducts(selectedRows));
    } else {
      dispatch(deleteSingleProduct(selectedRows[0]));
    }
  };

  const buttonIsDisabled = selectedRows.length === 0;

  const columns = [
    { field: "name", headerName: "Name", width: 400 },
    { field: "brand", headerName: "Brand", width: 250 },
    { field: "category", headerName: "Category", width: 250 },
    { field: "price", headerName: "Price", width: 80 },
    { field: "color", headerName: "Colour", width: 80 },
    { field: "size", headerName: "Size", width: 80 },
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
    goToNewPage: () => goToNewPage(),
    handleDelete: () => handleDelete(),
  };
};
