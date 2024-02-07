import React from "react";
import styles from "./AnimatedCheckbox.module.css";
export default function AnimatedCheckbox({ label, handleCheck, isActive }) {
  return (
    <div
      className={`${styles["inline-flex"]} ${styles["gap-2"]} ${styles["items-center"]} ${styles["select-none"]}`}
      onClick={() => handleCheck()}
    >
      <div
        className={`${styles["inline-flex"]} ${styles["relative"]}`}
        style={{ width: "22px" }}
      >
        <input
          type="checkbox"
          className={`${styles.animatedCheckbox} ${
            isActive ? styles.active : null
          }`}
          id="_checkbox"
        />
        <div
          htmlFor="_checkbox"
          className={`${styles.animatedCheckboxLabel} ${styles["cursor-pointer"]}`}
        >
          <div id="tick_mark" className={styles.tickMark}></div>
        </div>
      </div>
      <span>{label}</span>
    </div>
  );
}
