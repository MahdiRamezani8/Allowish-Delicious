import styles from "./WrapperImage.module.css";

function WrapperImage({ children }) {
  return <div className={styles.wrapperImage}> {children} </div>;
}

export default WrapperImage;
