import React, { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.body}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
