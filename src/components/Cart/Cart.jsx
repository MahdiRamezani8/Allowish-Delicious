import { useMenu } from "../../contexts/MenuContext";
import { useNav } from "../../contexts/NavContext";
import Header from "../Header/Header";
import styles from "./Cart.module.css";
function Cart() {
  const { cart } = useMenu();
  const { headerRef } = useNav();

  return (
    <>
      <Header elRef={headerRef} />
      <ul className={styles.main}>
        {cart.map((item, i) => (
          <li className="item" key={i}>
            name: {item.name}
            price: {item.totalprice} {item.priceUnit}s
          </li>
        ))}
      </ul>
      ;
    </>
  );
}

export default Cart;
