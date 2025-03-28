import { NavLink } from "react-router";

import styles from "./Home.module.scss";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <main className={styles.Home}>
        <div className={styles.Home__hero}>
          <h1 className={styles.Home__hero__title}>
            Chez vous, partout et ailleurs
          </h1>
        </div>

        <div className={styles.Home__locations}>
          {locations &&
            locations.map((location) => (
              <NavLink key={location.id} to={`/location/${location.id}`}>
                <div
                  className={styles.Home__locations__location}
                  style={{ backgroundImage: `url(${location.cover})` }}
                >
                  <h3 className={styles.Home__locations__location__title}>
                    {location.title}
                  </h3>
                </div>
              </NavLink>
            ))}
        </div>
      </main>
    </>
  );
}
