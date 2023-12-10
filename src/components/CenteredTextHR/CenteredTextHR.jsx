import React from "react";
import styles from "./CenteredTextHR.module.css";
export default function CenteredTextHR({ title, style, type = 1 }) {
  return (
    <div
      style={style}
      className={`${styles.skills} ${type == 1 ? styles.type1 : styles.type2}`}
    >
      <hr
        className={`${styles["hr-text"]} ${
          title ? "" : styles["hr-none-title"]
        }`}
        style={{ fontWeight: "600" }}
        dataContent={title}
      />
    </div>
  );
}
