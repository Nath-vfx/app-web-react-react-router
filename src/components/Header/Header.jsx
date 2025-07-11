import { NavLink } from "react-router";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.Header}>
        <NavLink to="/">
          <img className={styles.Header__logo} src="/logo.svg" alt="" />
        </NavLink>
        <nav className={styles.Header__nav}>
          <NavLink className={styles.Header__nav__item} to="/">
            Accueil
          </NavLink>
          <NavLink className={styles.Header__nav__item} to="/a-propos">
            À propos
          </NavLink>
        </nav>
      </header>
    </>
  );
}
