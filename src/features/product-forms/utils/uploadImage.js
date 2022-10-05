import Axios from "../../../utils/axios";

export const uploadImage = async (product, image) => {
  if (typeof image !== "object") return product;

  const imageInfo = {
    id: product._id,
    name: image[0].name,
  };

  const {
    data: { url },
  } = await Axios.post("/upload/s3url", imageInfo);

  await Axios.put(url, image[0]);

  const imageUrl = url.split("?")[0];

  const { data: updatedProduct } = await Axios.patch(`/products/${product._id}`, {
    imageUrl,
  });

  return updatedProduct;
};
