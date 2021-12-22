import React, { FC, useState } from "react";

interface IProps {
  items: Array<string>;
}

type TActiveItem = number | null;

const Categories: FC<IProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<TActiveItem>(null);

  const onSelectItem = (index: TActiveItem) => {
    setActiveItem(index);
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
};

export default Categories;
