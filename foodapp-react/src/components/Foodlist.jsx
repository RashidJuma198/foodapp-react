import FoodItem from "./FoodItem";

export default function Foodlist({ setFoodId, foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} setFoodId={setFoodId} food={food} />
      ))}
    </div>
  );
}
