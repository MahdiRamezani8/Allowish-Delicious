import styles from "./Wrapper.module.css";

function Wrapper({ children, type }) {
  return (
    <section className={`${styles[type]} ${styles.wrapper}`}>
      {children}
    </section>
  );
}

export default Wrapper;
