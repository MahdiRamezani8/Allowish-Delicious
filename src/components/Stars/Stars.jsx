import styles from "./Stars.module.css";

function Stars({ rate }) {
  const stars = Math.round(Number(rate));

  return (
    <div className={styles.stars}>
      {Array.from({ length: stars }, (_, i) => i + 1).map((num) => (
        <img key={num} src="Assests/star.svg" alt="star" />
      ))}
    </div>
  );
}

export default Stars;
