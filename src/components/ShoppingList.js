import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  function handleChange(e) {
    // console.log('selected', selectedCategory)
    setSelectedCategory(e.target.value)
    //filter items arr
  }
  
  let displayItems = items.filter( item => {
    if (selectedCategory === 'All') {
      // console.log('in if statement')
      return true
    }
    // console.log('in else block')
    return item.category === selectedCategory
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      {/* {console.log('displayItems', displayItems)} */}
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
