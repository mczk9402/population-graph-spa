import styles from "./styles.module.scss";
import React from "react";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>都道府県別 総人口推移グラフ</h1>
    </header>
  );
};
