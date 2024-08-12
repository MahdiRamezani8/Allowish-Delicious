import styles from "./CardBox.module.css";

function CardBox({ children }) {
  return <div className={styles.cardBox}>{children}</div>;
}

export default CardBox;
