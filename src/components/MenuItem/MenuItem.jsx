import styles from "./MenuItem.module.css";
import Button from "../Button/Button";
import { useMenu } from "../../contexts/MenuContext";
function MenuItem({ item: { item, price, priceUnit, image } }) {
  const {
    addItem,
    deleteItem,
    increaseQuantity,
    decreaseQuantity,
    getExistingItemInCart,
  } = useMenu();

  const existingItemInCart = getExistingItemInCart(item);

  return (
    <li className={styles.menuListItem}>
      <div>
        <img src={image} alt={item} />
        <b className={styles.title}>
          <i>{item}</i>
          <i>{price}</i>
        </b>
      </div>

      <div className={styles.options}>
        {!existingItemInCart ? (
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
            <div className={styles.quantity}>
              <Button type="circle" event={() => decreaseQuantity(item)}>
                -
              </Button>
              <b>{existingItemInCart.quantity}</b>
              <Button type="circle" event={() => increaseQuantity(item)}>
                +
              </Button>
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
