import Card from "../components/Card";
import { useEffect, useReducer } from "react";
import logger from "use-reducer-logger";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Products = () => {
  const [{ products, loading, error }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const getData = async (url) => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const res = await axios.get(url);
        console.info(res.data);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };

    getData("/api/products").catch((err) =>
      console.error(err, "msg from 'getData' function")
    );
  }, []);

  return (
    <section className="p-2 xs:px-14 sm:px-2">
      <h1 className="text-2xl font-semibold text-slate-950">
        Feactured Products
      </h1>
      <br />
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>
            <strong className="text-red-500">Error:</strong> {error}
          </div>
        ) : (
          products.map((product) => (
            <Card
              key={product.slug}
              name={product.name}
              price={product.price}
              image={product.image}
              slug={product.slug}
              rating={product.rating}
              numReviews={product.numReviews}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Products;
