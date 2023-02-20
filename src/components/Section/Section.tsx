import React, { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  heading: string;
  children: ReactNode;
};

export const Section: FC<Props> = ({ heading, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>
      <div>{children}</div>
    </section>
  );
};
