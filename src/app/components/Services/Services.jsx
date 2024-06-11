import { FaUsers } from "react-icons/fa"
import { FaHandshake } from "react-icons/fa6"
import { IoMdVideocam } from "react-icons/io"
import styles from './styles.module.css'

export const Services = ()=>{
    return (
        <div className={`${styles.servicesWapper}`}>
            <div className={styles.serviceDescription}>
                <div className={styles.serviceTitle}>
                    <FaHandshake />
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
                    <FaUsers />
                    <span>
                        Eventos
                    </span>
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
                    <IoMdVideocam />
                    <span>Videos profesionales</span>
                </div>
                {/*<ul>
                    <li>Excelente para redes sociales, perfecto para tu página web</li>
                </ul>*/}
            </div>
        </div>
    )
}