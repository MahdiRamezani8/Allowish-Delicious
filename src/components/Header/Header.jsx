import styles from "./Header.module.css";
import Button from "../Button/Button";
import { useNav } from "../../contexts/NavContext";
import { Link } from "react-router-dom";

function Header() {
  const { headerRef } = useNav();

  return (
    <header className={styles.header} ref={headerRef}>
      <section className={styles.hero}>
        <section className={styles.heroTitle}>
          <h1>Alowishus Delicious Coffee </h1>
          <p>
            A drink from the ‘My Alowishus’ bottled brews range OR grab one of
            our delicious coffee’s.
          </p>
          <div>
            <Button type="primary">DOWNLOAD APP</Button>
            <Link to="/menu">
              <Button type="underline">SHOP COFFE</Button>
            </Link>
          </div>
        </section>
        <section className={styles.heroImage}>
          <img src="Assests/Coffe1.svg" alt="" />
        </section>
      </section>
    </header>
  );
}

export default Header;
