import styles from "./fooditem.module.css";
export default function FoodItem({ setFoodId, food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="food" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            setFoodId(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
