import { useEffect, useReducer } from "react";
import axios from "axios";
import Card from "../components/Card";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { product: action.data, loading: false, error: "" };
    case "FETCH_FAIL":
      return { product: {}, loading: false, error: action.data };
    default:
      return state;
  }
};

const Counter = () => {
  // const [visi, setVisi] = useState(false);
  const [{ product, loading, error }, dispatch] = useReducer(reducer, {
    product: {},
    loading: true,
    error: "",
  });

  useEffect(() => {
    const getData = async (url) => {
      try {
        const res = await axios.get(url);
        dispatch({ type: "FETCH_SUCCESS", data: res.data[0] });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", data: err.message });
        throw err;
      }
    };

    getData("/api/products").catch((err) => console.error(err, "myError"));
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center pt-5">
      {loading ? (
        "Loading..."
      ) : (
        <Card
          image={product.image}
          name={product.name}
          slug={product.slug}
          price={product.price}
        />
      )}
      {error && error}
    </div>
  );
};

export default Counter;

// import { useReducer } from 'react';

// function reducer(state, action) {
//   if (action.type === 'incremented_age') {
//     return {
//       age: state.age + 1
//     };
//   }
//   throw Error('Unknown action.');
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, { age: 42 });

//   return (
//     <>
//       <button onClick={() => {
//         dispatch({ type: 'incremented_age' })
//       }}>
//         Increment age
//       </button>
//       <p>Hello! You are {state.age}.</p>
//     </>
//   );
// }
