import { useDispatch } from "react-redux";
import { createNewProduct } from "../../app/slices/productSlice";

export const useNewProduct = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createNewProduct(data));
  };

  return {
    onSubmit: (data) => onSubmit(data),
  };
};
