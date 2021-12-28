import React, { FC, useState } from "react";

interface IProps {
  items: Array<string>;
  onClickItem: (index: TActiveItem) => void;
}

type TActiveItem = number | null;

const Categories: FC<IProps> = React.memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState<TActiveItem>(null);
  console.log("RENDER CATEGORIES");

  const onSelectItem = (index: TActiveItem) => {
    setActiveItem(index);
    onClickItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : "d"}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items.map((name: string, index) => (
          <li
            className={index === activeItem ? "active" : ""}
            onClick={() => onSelectItem(index)}
            key={`${name}_${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
