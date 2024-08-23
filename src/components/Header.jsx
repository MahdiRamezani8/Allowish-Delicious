import styles from "./Header.module.css";
import Button from "./Button";
import Nav from "./Nav";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(null);
  const headerRef = useRef();

  function observerCallBack([entry]) {
    console.log(entry.isIntersecting);

    if (entry.isIntersecting) setIsNavVisible(false);
    if (!entry.isIntersecting) setIsNavVisible(true);
  }

  useEffect(() => {
    const el = headerRef.current;

    const observer = new IntersectionObserver(observerCallBack, {
      root: null,
      threshold: 0.5,
    });

    if (el) observer.observe(el);

    return () => el && observer.unobserve(el);
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <Nav isVisible={isNavVisible} />
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
