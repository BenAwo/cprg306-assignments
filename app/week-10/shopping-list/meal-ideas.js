"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const food = await response.json();
    console.log(food);
    return food;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  async function loadMealIdeas(ingredient) {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData.meals);
  }
  useEffect(() => {
    if (!ingredient) {
      return;
    }
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <main>
      <h1>
        <div>
          <p>Meals:</p>
          <ul>
            {meals?.length ?
              meals.map((mealOption) => (
                <li key={mealOption.idMeal}>
                  <p>{mealOption.strMeal}</p>
                </li>
              )):<div>No Meals For Option</div>}
          </ul>
        </div>
      </h1>
    </main>
  );
}
