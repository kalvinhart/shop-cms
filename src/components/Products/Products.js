import { Route, Routes } from "react-router";
import { useProductsPage } from "../../hooks/useProductsPage/useProductsPage";

import Spinner from "../shared/Spinner/Spinner";
import EditProduct from "./EditProduct/EditProduct";
import NewProduct from "./NewProduct/NewProduct";
import ShowProducts from "./ShowProducts/ShowProducts";

const Products = () => {
  const { categoryLoading, productsLoading } = useProductsPage();

  if (productsLoading || categoryLoading) return <Spinner />;

  return (
    <>
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/new" element={<NewProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
};

export default Products;
