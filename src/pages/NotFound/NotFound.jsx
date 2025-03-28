import { NavLink } from "react-router";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <>
      <div className={styles.NotFound}>
        <h1 className={styles.NotFound__title}>404</h1>
        <p className={styles.NotFound__text}>
          Oups! La page demandez n'existe pas.
        </p>
        <NavLink className={styles.NotFound__link} to={"/"}>
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </>
  );
}
