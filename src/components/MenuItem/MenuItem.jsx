import styles from "./MenuItem.module.css";
import Button from "../Button/Button";
function MenuItem({ item: { item, price, priceUnit, image } }) {
  return (
    <li className={styles.menuListItem}>
      <div>
        <img src={image} alt={item} />
        <b className={styles.title}>
          <i>{item}</i>
          <i>{price}</i>
        </b>
      </div>

      <div>
        <Button type="primary">+ add to cart</Button>
      </div>
    </li>
  );
}

export default MenuItem;
