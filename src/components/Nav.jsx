import styles from "./Nav.module.css";
import Button from "./Button";
import Label from "./Label";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Label />
      <Button type="menu">&#9776;</Button>
      {/* <button>&#10006;</button> */}
      <ul className={styles.menu}>
        <li>Cafe Menu</li>
        <li>About Us</li>
        <li>Find Us</li>
        <li>Alowish Catering</li>
        <li>
          <Button type="white">
            <img src="../../public/Assests/BasketIcon.svg" alt="" />
          </Button>
        </li>
        <li>
          <Button type="primary">buy gift vouchers</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
