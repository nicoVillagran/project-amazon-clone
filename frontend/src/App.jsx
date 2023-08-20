import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import PageProduct from "./pages/PageProduct";
import Counter from "./pages/test";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    if (modal) {
      setModal(false);
    } else setModal(true);
  };
  return (
    <main className="bg-gray-300 pt-16">
      <BrowserRouter>
        <Header handleModal={handleModal} />
        <Routes>
          <Route path="/product/:slug" element={<PageProduct />} />
          <Route path="/" element={<Products />} />
          <Route path="/test" element={<Counter />} />
        </Routes>
      </BrowserRouter>
      <div
        onClick={handleModal}
        className={`absolute top-0 left-0 z-10 w-full h-screen bg-slate-950/50 ${
          modal ? "inline-block" : "hidden"
        }`}
      ></div>
    </main>
  );
}

export default App;
