import styles from "./ShopCard.module.css";
import Button from "./Button";

function ShopCard({ img, rank, title, desc, price }) {
  return (
    <div className={styles.card}>
      <header>
        <div className={styles.image}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.title}>
          <i>#{rank} Selling</i>
          <h3>{title}</h3>
        </div>
      </header>
      <p>{desc}</p>
      <footer>
        <b>{price}</b>
        <Button type="primary">order now</Button>
      </footer>
    </div>
  );
}

export default ShopCard;
