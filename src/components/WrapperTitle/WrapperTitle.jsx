import styles from "./WrapperTitle.module.css";

function WrapperTitle({ children, type }) {
  return (
    <div className={`${styles.wrapperTitle} ${styles[type]}`}>{children}</div>
  );
}

export default WrapperTitle;
