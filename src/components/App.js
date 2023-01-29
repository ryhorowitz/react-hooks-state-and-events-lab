import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [appClass, setAppClass] = useState(true)

  function handleClick() {
    // console.log('appClass before setAppClass', appClass)
    setAppClass(appClass => !appClass)
  }

  return (
    <div className={appClass === false ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
