import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Rating from "../../components/Rating/Rating";
import Details from "../../components/Details/Details";
import styles from "./Location.module.scss";

export default function Location() {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  let [count, setCount] = useState(1);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const location = data.find((location) => location.id === id);
        setLocation(location);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    setCount((prevCount) =>
      prevCount < location.pictures.length ? prevCount + 1 : 1,
    );
  };

  const prevSlide = () => {
    setCount((prevCount) =>
      prevCount > 1 ? prevCount - 1 : location.pictures.length,
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className={styles.Location} key={location.id}>
        <div className={styles.Location__carrousel}>
          {location.pictures.map((picture, index) => (
            <img
              key={index}
              className={styles.Location__carrousel__item}
              src={picture}
              alt={`Slide ${index + 1}`}
              style={{ display: count - 1 === index ? "block" : "none" }}
            />
          ))}
          {location.pictures.length > 1 && (
            <>
              <button
                className={styles.Location__carrousel__arrowLeft}
                onClick={prevSlide}
              >
                <img src="/arrow-left.svg" />
              </button>
              <button
                className={styles.Location__carrousel__arrowRight}
                onClick={nextSlide}
              >
                <img src="/arrow-right.svg" />
              </button>
              <span className={styles.Location__carrousel__count}>
                {count}/{location.pictures.length}
              </span>
            </>
          )}
        </div>
        <div className={styles.Location__headline}>
          <hgroup className={styles.Location__headline__hgroup}>
            <h1 className={styles.Location__headline__hgroup__title}>
              {location.title}
            </h1>
            <p className={styles.Location__headline__hgroup__local}>
              {location.location}
            </p>
            <div className={styles.Location__headline__hgroup__tags}>
              {location.tags.map((tag) => (
                <span
                  key={tag}
                  className={styles.Location__headline__hgroup__tags__tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </hgroup>
          <div className={styles.Location__headline__host}>
            <div className={styles.Location__headline__host__infos}>
              <h2 className={styles.Location__headline__host__infos__name}>
                {location.host.name}
              </h2>
              <img
                className={styles.Location__headline__host__infos__avatar}
                src={location.host.picture}
                alt=""
              />
            </div>
            <div className={styles.Location__rating}>
              <Rating score={location.rating} />
            </div>
          </div>
        </div>

        <div className={styles.Location__details}>
          <Details summary="Description" content={location.description} />
          <Details summary="Équipements" content={location.equipments} />
        </div>
      </div>
    </>
  );
}
