import React, { FC } from "react";

import { Categories, PizzaBlock, Sort } from "../components";
import { TPizzaList } from "../types/types";

interface IProps {
  items: TPizzaList;
}

const Home: FC<IProps> = ({ items }) => {
  console.log(typeof items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <Sort items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {console.log(items)}
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
