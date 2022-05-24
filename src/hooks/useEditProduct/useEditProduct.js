import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadAllProducts, updateProduct } from "../../slices/productSlice";

export const useEditProduct = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.product);

  const [currentProduct, setCurrentProduct] = useState({});
  const [defaultValues, setDefaultValues] = useState({});

  const params = useParams();

  const { id } = params;

  useEffect(() => {
    if (!products) {
      return;
    } else {
      const product = products.filter((item) => item._id === id)[0];
      setCurrentProduct(product);
    }
  }, [loading, products, dispatch, loadAllProducts, setCurrentProduct]);

  useEffect(() => {
    if (currentProduct?.name) {
      setDefaultValues({
        ...currentProduct,
        desc: currentProduct.description,
        image: currentProduct.imageUrl,
      });
    }
  }, [currentProduct, setDefaultValues]);

  const submitForm = (data) => {
    const newData = {
      ...data,
      _id: currentProduct._id,
    };
    dispatch(updateProduct(newData));
  };

  return {
    loading,
    defaultValues,
    submitForm: (data) => submitForm(data),
  };
};
