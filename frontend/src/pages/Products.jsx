import data from "../data";
import Card from "../components/Card";

const Products = () => {
  return (
    <section className="p-2">
      <h1 className="text-2xl font-semibold text-slate-950">
        Feactured Products
      </h1>
      <br />
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <Card
            key={product.slug}
            name={product.name}
            price={product.price}
            image={product.image}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
