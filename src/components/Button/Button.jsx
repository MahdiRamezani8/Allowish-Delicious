import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ children, type, event, to }) {
  if (to)
    return (
      <Link to="/cart">
        <button className={`${styles.btn} ${styles[type]}`} onClick={event}>
          {children}
        </button>
      </Link>
    );

  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={event}>
      {children}
    </button>
  );
}

export default Button;
