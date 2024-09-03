import styles from "./MenuItem.module.css";
import Button from "../Button/Button";
import { useMenu } from "../../contexts/MenuContext";
function MenuItem({ item: { item, price, priceUnit, image } }) {
  const { addItem, cart, deleteItem } = useMenu();
  const isItemInTheCart = cart.find((cartItem) => cartItem.item === item);

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
        {!isItemInTheCart ? (
          <Button
            type="primary"
            event={() => addItem({ item, price, priceUnit })}
          >
            + add to cart
          </Button>
        ) : (
          <>
            <Button type="red" event={() => deleteItem(item)}>
              remove
            </Button>
          </>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
