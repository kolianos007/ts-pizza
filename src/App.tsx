import React, { FC, useEffect } from "react";

import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { Cart, Home } from "./pages";
import axios from "axios";
import { useDispatch } from "react-redux";
import pizzaActions from "./store/actions/pizzas";

// interface IMapStateToProps {
//   items: TPizzaList;
// }

// interface IMapDispatchToProps {
//   setPizzas: (items: TPizzaList) => void;
// }

// type PropsType = IMapStateToProps & IMapDispatchToProps;

// const App: FC<PropsType> = () => {
const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((response) =>
        dispatch(pizzaActions.setPizzas(response.data.pizzas))
      );
  }, []);
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
};

// const mapStateToProps = ({ pizzas }: AppStateType): IMapStateToProps => {
//   return {
//     items: pizzas.items,
//   };
// };

// export default connect(mapStateToProps, {
//   setPizzas: pizzaActions.setPizzas,
// })(App);

export default App;
