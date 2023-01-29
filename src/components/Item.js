import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleClick() {
    setInCart( inCart => !inCart)
  }
  return (
    <li className={inCart === false ? "add" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart === false ? "add" : "remove"}
        onClick={handleClick}>{inCart === false ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
