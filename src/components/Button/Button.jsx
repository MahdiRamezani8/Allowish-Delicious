import styles from "./Button.module.css";

function Button({ children, type, event }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={event}>
      {children}
    </button>
  );
}

export default Button;
