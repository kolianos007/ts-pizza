import React, { FC } from "react";
import classNames from "classnames";

interface IProps {
 outline?: boolean;
 className: string;
 onClick: () => void;
}

const Button: FC<IProps> = ({ outline, onClick, className, children }) => {
 return (
  <button
   onClick={() => onClick()}
   className={classNames("button", className, {
    "button--outline": outline,
   })}
  >
   {children}
  </button>
 );
};

export default Button;
