import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaBlock, PizzaLoadingBlock, Sort } from "../components";
import { cartActions } from "../store/actions/cart";
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
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
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

  const cartItems = useSelector(({ cart }: AppStateType) => {
    return cart.items;
  });

  const { category, sortBy }: { category: number | null; sortBy: any } =
    useSelector(({ filters }: AppStateType) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = useCallback((index: number | null) => {
    dispatch(filterActions.setCategory(index));
  }, []);

  const onSelectSortType = useCallback(
    (type: { type: string; order: string }) => {
      dispatch(filterActions.setSortBy(type));
    },
    []
  );

  const onAddPizzaToCard = (obj: any) => {
    dispatch(cartActions.addPizzaToCart(obj));
  };

  // console.log(oldItems === items, { oldItems, items });
  // oldItems = items;
  // console.log(oldItems === items, { oldItems, items });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategoryIndex={category}
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <Sort
          activeSortBy={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => {
              return (
                <PizzaBlock
                  key={obj.id}
                  onClickAddPizza={onAddPizzaToCard}
                  addedCount={
                    cartItems[obj.id] && cartItems[obj.id].items.length
                  }
                  {...obj}
                />
              );
            })
          : Array(12)
              .fill(0)
              .map((_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
};

export default Home;
