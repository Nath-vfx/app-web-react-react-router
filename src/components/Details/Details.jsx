import style from "./Details.module.scss";
import { useState } from "react";

export default function Details({ summary, content }) {
  const [isActive, setIsActive] = useState(false);
  
  function toggleActive() {
    setIsActive(!isActive);
  }
  
  const contentClass = isActive ? style.Details__content__active : style.Details__content;
  const titleClass = isActive ? `${style.Details__title} ${style.Details__title__active}` : style.Details__title;

  return (
    <>
      <div className={style.Details} onClick={toggleActive}>
        <h3 className={titleClass}>{summary}</h3>
        <p className={contentClass}>
          {content}
        </p>
      </div>
    </>
  );
}
