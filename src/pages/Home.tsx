import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaBlock, PizzaLoadingBlock, Sort } from "../components";
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
  const { items, isLoaded }: { items: TPizzaList; isLoaded: boolean } =
    useSelector(({ pizzas }: AppStateType) => {
      return {
        items: pizzas.items,
        isLoaded: pizzas.isLoaded,
      };
    });

  const { category, sortBy }: { category: number | null; sortBy: string } =
    useSelector(({ filters }: AppStateType) => filters);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category]);

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
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock isLoading={true} key={obj.id} {...obj} />
            ))
          : Array(12)
              .fill(0)
              .map((_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
};

export default Home;
