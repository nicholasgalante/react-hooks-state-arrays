import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");


  // My solution:
  // function handleAddFood() {
  //   const newFood = getNewRandomSpicyFood();
  //   const newFoodsArray = JSON.parse(JSON.stringify(foods))
  //   newFoodsArray.push(newFood)
  //   setFoods(newFoodsArray)
  // }

  // Lab solution:
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]; //spread operator
    setFoods(newFoodArray);
  }

  // My solution:
  // function handleLiClick(food){
  //   console.log(food)
  //   const newFoodArray = []
  //   for (let i = 0; i < foods.length; i++) {
  //     if(food != foods[i]){
  //       newFoodArray.push(foods[i])
  //     }
  //   }
  //   setFoods(newFoodArray);
  // }

  // Lab solution
  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
