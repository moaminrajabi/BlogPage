import React from "react";

import style from "./ButtonCustom.module.css";

export default function ButtonCustom({ children }) {
  return <button className={style.button}>{children}</button>;
}
