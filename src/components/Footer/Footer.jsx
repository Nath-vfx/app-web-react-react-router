import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.Footer}>
        <img className={styles.Footer__logo} src="white-logo.svg" alt="" />
        <p className={styles.Footer__text}>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}
