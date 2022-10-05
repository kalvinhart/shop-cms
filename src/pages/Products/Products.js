import { Route, Routes } from "react-router";
import { useProductsPage } from "./useProductsPage";

import Spinner from "../../common/components/Spinner/Spinner";
import EditProduct from "../../features/product-forms/components/EditProduct/EditProduct";
import NewProduct from "../../features/product-forms/components/NewProduct/NewProduct";
import ShowProducts from "../../features/display-products/components/ShowProducts/ShowProducts";

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
