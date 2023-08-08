import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <main className="bg-gray-300">
      <header className="p-3 bg-slate-900 text-white">
        <a
          className="relative after:absolute after:left-0 after:-bottom-px after:w-full after:h-px after:bg-orange-400 sm:text-lg"
          href="/"
        >
          amazon
        </a>
      </header>
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
    </main>
  );
}

export default App;
