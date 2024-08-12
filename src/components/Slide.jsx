import styles from "./Slide.module.css";
import Stars from "./Stars";

function Slide({ review: { name, rate, comment, profile } }) {
  return (
    <div className={styles.slide}>
      <div className={styles.image}>
        <img src={profile} alt={name} />
      </div>
      <div className={styles.title}>
        <span>
          <h2>{name}</h2>
          <Stars rate={rate} />
        </span>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Slide;
