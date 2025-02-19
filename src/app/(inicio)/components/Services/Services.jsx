"use client";
import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";

export const Services = () => {
  return (
    <div className={`${styles.servicesWapper} paddingSection`}>
      <Slide triggerOnce direction="right">
        <div className={`${styles.servicesGrid} flexContainer`}>
          <div className={styles.serviceDescription}>
            <div className={styles.serviceTitle}>
              <img
                src="/assets/images/empresa.png"
                className={styles.serviceImage}
              />
              <span>Servicio para empresas</span>
            </div>
            {/*<ul>
                    <li>CCTV para Master Class</li>
                    <li>Video de poducto o servicio</li>
                    <li>Testimoniales</li>
                    <li>Congresos</li>
                    <li>Conferencias</li>
                    <li>Transmisión en vivo</li>
                </ul>*/}
          </div>
          <div className={styles.serviceDescription}>
            <div className={styles.serviceTitle}>
              <img
                src="/assets/images/eventos.png"
                className={styles.serviceImage}
              />
              <span>Eventos sociales</span>
            </div>
            {/*<ul>
                    <li>Bodas</li>
                    <li>XV años</li>
                    <li>Graduaciones</li>
                    <li>Fiestas infantiles</li>
                    <li>Eventos deportivos, artísticos y cultirales</li>
                </ul>*/}
          </div>
          <div className={styles.serviceDescription}>
            <div className={styles.serviceTitle}>
              <img
                src="/assets/images/camara.png"
                className={styles.serviceImage}
              />
              <span>Videos profesionales</span>
            </div>
            {/*<ul>
                    <li>Excelente para redes sociales, perfecto para tu página web</li>
                </ul>*/}
          </div>
        </div>
      </Slide>
    </div>
  );
};
