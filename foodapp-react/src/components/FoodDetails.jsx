import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "d80f9e881455431fa231dffdd5d46f84";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕥 {food.readyInMinutes} Minutes </strong>
          </span>
          <strong>
            👪Serves<span> {food.servings}</span>
          </strong>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄Vegan" : ""}</strong>
          </span>
        </div>

        <div>
          💵
          <span>
            <strong>{food.pricePerServing / 100} per Serving</strong>
          </span>
        </div>
      </div>
      <div className={styles.recipeCard}>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading.....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
