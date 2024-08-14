import styles from "./Header.module.css";
import Button from "./Button";
import Nav from "./Nav";

function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <section className={styles.hero}>
        <section className={styles.heroTitle}>
          <h1>Alowishus Delicious Coffee </h1>
          <p>
            A drink from the ‘My Alowishus’ bottled brews range OR grab one of
            our delicious coffee’s.
          </p>
          <div>
            <Button type="primary">DOWNLOAD APP</Button>
            <Button type="underline">SHOP COFFE</Button>
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
