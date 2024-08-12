import styles from "./CategoryCard.module.css";
import Button from "./Button";

function CategoryCard({ title, desc, icon, btn }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>
        <img src={icon} alt="title" />
      </div>
      <Button type="primary">{btn}</Button>
    </div>
  );
}

export default CategoryCard;
