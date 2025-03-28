import style from "./Details.module.scss";
import { useState } from "react";

export default function Details({ summary, content }) {
  const [className, setClassName] = useState(style.Details__content);

  function toggleActive() {
    if (className === style.Details__content) {
      setClassName(style.Details__content__active);
    } else {
      setClassName(style.Details__content);
    }
  }

  return (
    <>
      <div className={style.Details} onClick={toggleActive}>
        <h3 className={style.Details__title}>{summary}</h3>
        <p className={className}>
          {content}
        </p>
      </div>
    </>
  );
}
