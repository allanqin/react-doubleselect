import React, { useState } from "react";
import { categories, categoryObj } from "../../DB/db.js";
import "./DoubleSelect.css";

export const DoubleSelect = () => {
  //   console.log("categories", categories);
  //   console.log("categoryObj", categoryObj);

  const [category, setCategory] = useState(categories[0]);
  const [item, setItem] = useState(categoryObj[category][0]);

  //   console.log("category", category);
  //   console.log("item:", item);

  const createList = (list) => {
    const options = list.map((ele) => <option key={ele}>{ele}</option>);

    return options;
  };

  const handleItem = (e) => {
    // console.log("itemChange");
    setItem(e.target.value);
  };

  const handleCategory = (e) => {
    // console.log("categoryChange");
    const cat = e.target.value;
    setCategory(cat);
    setItem(categoryObj[cat][0]);
  };

  return (
    <div className="App">
      <h1 id="title">{item}</h1>
      <div className="menu">
        <div>
          <label>category</label>
          <select id="categories" onChange={(e) => handleCategory(e)}>
            {createList(categories)}
          </select>
        </div>
        <div>
          <label>item</label>
          <select id="items" onChange={(e) => handleItem(e)}>
            {createList(categoryObj[category])}
          </select>
        </div>
      </div>
    </div>
  );
};
