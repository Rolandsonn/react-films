import React from "react";

import styles from "./BtnUp.module.scss";

import ScrollBtn from "../../../image/BtnUp.png";

export default function BtnUp() {
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      right: -1,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.wrapper}>
      <button className={styles.ScrollBtn} onClick={handlerScrollUp}>
        <img className={styles.BtnUp} src={ScrollBtn} alt="img" />
      </button>
    </div>
  );
}
