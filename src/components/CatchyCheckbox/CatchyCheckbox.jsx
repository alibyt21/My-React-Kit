import React from "react";
import styles from "./CatchyCheckbox.module.css";
export default function CatchyCheckbox({ label, handleCheck, isActive }) {
  return (
    <div
      className={`${styles["inline-flex"]} ${styles["gap-2"]}`}
      onClick={() => handleCheck()}
    >
      <div
        class={`${styles["cursor-pointer"]} ${styles.checkbox} ${
          isActive ? styles.active : ""
        }`}
      ></div>
      <label>{label}</label>
    </div>
  );
}
