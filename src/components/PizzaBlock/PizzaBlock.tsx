import React, { FC, useState } from "react";
import { IPizza } from "../../types/types";
import classNames from "classnames";
import PizzaLoadingBlock from "./PizzaLoadingBlock";
import Button from "../Button/Button";

interface PropTypes extends IPizza {
  // isLoading: boolean;
  addedCount: number;
  onClickAddPizza: ({
    id,
    name,
    imageUrl,
    price,
  }: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }) => void;
}

export interface CartItems {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  size: number;
  type: string;
}

const PizzaBlock: FC<PropTypes> = ({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
  category,
  rating,
  onClickAddPizza,
  addedCount,
}) => {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];
  // console.log(sizes, category, rating, id);

  const onSelectType = (index: number) => {
    setActiveType(index);
  };
  const onSelectSize = (index: number) => {
    setActiveSize(availableSizes[index]);
  };

  const onAddPizza = () => {
    const obj: CartItems = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    onClickAddPizza(obj);
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, i) => (
            <li
              key={type}
              onClick={() => onSelectType(i)}
              className={classNames({
                active: activeType === i,
                disabled: !types.includes(i),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((el, i) => (
            <li
              key={el}
              onClick={() => onSelectSize(i)}
              className={classNames({
                active: activeSize === availableSizes[i],
                disabled: !sizes.includes(el),
              })}
            >
              {el} см.
            </li>
          ))}
          {/* <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li> */}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className="button--add" outline onClick={onAddPizza}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
};

export default PizzaBlock;
