import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./Default.module.scss";

export default function Default() {
  return (
    <>
      <Header />
      <div className={styles.Content}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
