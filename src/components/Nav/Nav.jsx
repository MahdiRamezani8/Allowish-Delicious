import { useState } from "react";
import styles from "./Nav.module.css";
import Button from "../Button/Button";
import Label from "../Label/Label";
import { useMenu } from "../../contexts/MenuContext";
import { useNav } from "../../contexts/NavContext";

function Nav() {
  const { cart } = useMenu();
  const { isNavVisible } = useNav();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((status) => !status);
  }
  console.log(isNavVisible);

  return (
    <nav className={`${styles.nav} ${!isNavVisible ? styles.fixed : ""}`}>
      <Label />
      <span className={styles.btns}>
        <Button type="white">
          <img src="Assests/BasketIcon.svg" alt="" />
        </Button>
        <Button type="menu" event={handleToggleMenu}>
          <img
            src={`Assests/${isMenuOpen ? "close" : "open"}.svg`}
            alt="menu"
          />
        </Button>
      </span>

      <ul className={`${styles.DE}`}>
        <li className={styles.DEListItem}>Cafe Menu</li>
        <li className={styles.DEListItem}>About Us</li>
        <li className={styles.DEListItem}>Find Us</li>
        <li className={styles.DEListItem}>Alowish Catering</li>
        <li className={styles.DEBtns}>
          <Button type="white">
            <img src="Assests/BasketIcon.svg" alt="" />
          </Button>
          <Button type="primary">buy gift vouchers</Button>
        </li>
      </ul>

      <ul className={`${styles.MB} ${isMenuOpen ? styles.open : ""}`}>
        <li className={styles.MBListItem}>Cafe Menu</li>
        <li className={styles.MBListItem}>About Us</li>
        <li className={styles.MBListItem}>Find Us</li>
        <li className={styles.MBListItem}>Alowish Catering</li>
      </ul>
    </nav>
  );
}

export default Nav;
