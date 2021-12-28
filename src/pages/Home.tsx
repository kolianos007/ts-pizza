import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaBlock, Sort } from "../components";
import filterActions from "../store/actions/filters";
import { AppStateType } from "../store/reducers";
import { TPizzaList } from "../types/types";

// interface IProps {
//   items: TPizzaList;
// }

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

  const onSelectCategory = (index: number | null) => {
    dispatch(filterActions.setCategory(index));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <Sort
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
