import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaBlock, Sort } from "../components";
import filterActions from "../store/actions/filters";
import { fetchPizzas } from "../store/actions/pizzas";
import { AppStateType } from "../store/reducers";
import { TPizzaList } from "../types/types";

// interface IProps {
//   items: TPizzaList;
// }

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

// let oldItems: any = [];

// const Home: FC<IProps> = ({ items }) => {
const Home: FC = () => {
  const dispatch = useDispatch();
  const { items }: { items: TPizzaList } = useSelector(
    ({ pizzas, filters }: AppStateType) => {
      return {
        items: pizzas.items,
        sortBy: filters.sortBy,
      };
    }
  );

  useEffect(() => {
    // axios
    //   .get("http://localhost:3001/pizzas")
    //   .then((response) => dispatch(pizzaActions.setPizzas(response.data)));
    dispatch(fetchPizzas());
  }, []);

  const onSelectCategory = useCallback((index: number | null) => {
    dispatch(filterActions.setCategory(index));
  }, []);

  // console.log(oldItems === items, { oldItems, items });
  // oldItems = items;
  // console.log(oldItems === items, { oldItems, items });

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <Sort items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
