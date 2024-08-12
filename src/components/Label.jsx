import styles from "./Label.module.css";

function Label({size}) {
  return (
    <img
      className={`${styles.label} ${styles[size]}`}
      src="../../public/Assests/Label.svg"
      alt="label"
    ></img>
  );
}

export default Label;
