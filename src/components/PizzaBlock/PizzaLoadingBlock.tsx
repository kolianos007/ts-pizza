import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="130" r="122" />
      <rect x="3" y="268" rx="3" ry="3" width="280" height="26" />
      <rect x="5" y="302" rx="3" ry="3" width="280" height="84" />
      <rect x="4" y="402" rx="3" ry="3" width="72" height="31" />
      <rect x="133" y="393" rx="20" ry="20" width="147" height="48" />
    </ContentLoader>
  );
};

export default PizzaLoadingBlock;
