import React from "react";

import style from "./SearchInput.module.css";

export default function SearchInput() {
  return <input className={style.input} type="text" placeholder="Search..." />;
}
