import React, { useEffect, useState } from "react";

import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { Cart, Home } from "./pages";
import axios from "axios";
import { TPizzaList } from "./types/types";

function App() {
  const [pizzas, setPizzas] = useState<TPizzaList>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((response) => setPizzas(response.data.pizzas));
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={pizzas} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
