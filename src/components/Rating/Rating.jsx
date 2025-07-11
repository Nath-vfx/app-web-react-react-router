import PropTypes from "prop-types";
import styles from "./Rating.module.scss";

function Rating({ score }) {
  if (score > 5) {
    score = 5;
  } else if (score < 0) {
    score = 0;
  }
  return (
    <div className={styles.Rating}>
      {Array.from({ length: score }, (_, index) => (
        <img key={index} src="/star-active.svg" alt="star" />
      ))}
      {Array.from({ length: 5 - score }, (_, index) => (
        <img key={index} src="/star-inactive.svg" alt="star" />
      ))}
    </div>
  );
}

Rating.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Rating;
