import { useSelector } from "react-redux";

export const useShowProducts = () => {
  const { products } = useSelector((state) => state.product);

  return {
    products,
  };
};
