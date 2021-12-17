import React, { FC } from "react";

interface IProps {
 items: Array<string>;
}

const Categories: FC<IProps> = ({ items }) => {
 return (
  <div className="categories">
   <ul>
    <li className="active">Все</li>
    {items.map((item: string) => (
     <li>{item}</li>
    ))}
   </ul>
  </div>
 );
};

export default Categories;
