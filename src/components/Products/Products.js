import { Route, Routes } from "react-router";
import { useProductsPage } from "../../hooks/useProductsPage/useProductsPage";

import Spinner from "../shared/Spinner/Spinner";
import NewProduct from "./NewProduct/NewProduct";

const Products = () => {
  const { categoryLoading } = useProductsPage();

  return (
    <>
      {categoryLoading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/new" element={<NewProduct />} />
        </Routes>
      )}
    </>
  );
};

export default Products;
