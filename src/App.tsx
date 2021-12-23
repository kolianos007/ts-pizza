import React, { useEffect, useState } from "react";

import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { Cart, Home } from "./pages";
import axios from "axios";

interface IPizza {
  id: number;
  imageUrl: string;
  name: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
}

function App() {
  const [pizzas, setPizzas] = useState<Array<IPizza>>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((response) => setPizzas(response));
  });
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
