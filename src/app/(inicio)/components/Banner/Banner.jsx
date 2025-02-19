'use client'
import { Slide } from "react-awesome-reveal";
import styles from "./styles.module.css";

export const Banner = () => {
  return (
    <section className={styles.bannerWrapper}>
      <Slide triggerOnce>
        <h1 className={styles.bannerTitle}>
          <span>Contamos </span>
          <span className={styles.markup}>Historias</span>
        </h1>
        <h2>Nivel Producción Audiovisual</h2>
      </Slide>
    </section>
  );
};
