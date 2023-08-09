import { useParams } from "react-router-dom";

const PageProduct = () => {
  const { slug } = useParams();
  return <h1 className="text-red-500 text-3xl">{slug}</h1>;
};

export default PageProduct;
