import React, { FC, useState } from "react";

interface IProps {
  activeCategoryIndex: TActiveItem;
  items: Array<string>;
  onClickItem: (index: TActiveItem) => void;
}

type TActiveItem = number | null;

const Categories: FC<IProps> = React.memo(
  ({ activeCategoryIndex, items, onClickItem }) => {
    // const [activeItem, setActiveItem] = useState<TActiveItem>(null);
    console.log("RENDER CATEGORIES");

    return (
      <div className="categories">
        <ul>
          <li
            className={activeCategoryIndex === null ? "active" : "d"}
            onClick={() => onClickItem(null)}
          >
            Все
          </li>
          {items.map((name: string, index) => (
            <li
              className={index === activeCategoryIndex ? "active" : ""}
              onClick={() => onClickItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
