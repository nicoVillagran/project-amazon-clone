import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import PageProduct from "./pages/PageProduct";

function App() {
  return (
    <main className="bg-gray-300">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/product/:slug" element={<PageProduct />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
