import React, { useState } from "react";

export default function Path({
  d,
  fill,
  children,
  handleProvince,
  province,
  selected,
}) {
  const [hover, setHover] = useState(false);
  return (
    <path
      className={`${province && province === selected ? 'selected' : ''}`}
      style={{cursor:"pointer"}}
      d={d}
      fill={
        province
          ? province === selected
            ? "#00b3b3"
            : hover
            ? "#57e5e5"
            : fill
          : fill
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleProvince(province)}
    >
      {children}
    </path>
  );
}
