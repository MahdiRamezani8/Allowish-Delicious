import styles from "./MenuItem.module.css";
import Button from "../Button/Button";
import { useMenu } from "../../contexts/MenuContext";
function MenuItem({ item: { item, price, priceUnit, image } }) {
  const { addItem } = useMenu();

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
        <Button type="primary" event={() => addItem({ item, price, priceUnit })}>
          + add to cart
        </Button>
      </div>
    </li>
  );
}

export default MenuItem;
