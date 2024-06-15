import styles from './styles.module.css'
import { FaWhatsapp } from "react-icons/fa6"
import { CiFacebook, CiMail, CiLocationOn, CiPhone } from "react-icons/ci"

export const Contact = ()=>{
    return (
        <section className={`paddingSection ${styles.contactWrapper}`}>
            <div className={`flexContainer ${styles.contactInfo}`}>
                <figure>
                    <img
                        src='https://nivelproduccion.com/assets/contact_photo.webp'
                    />
                </figure>
                <div>
                    <center>
                        <span className={styles.contactTitle}>Datos de contacto</span>
                    </center>
                    <ul className={styles.contactList}>
                        <li>
                            <a
                                href='https://wa.me/525584405634'
                                target='_blank'
                                className={styles.contactLink}
                            >
                                <FaWhatsapp /> <span>55 8440 5634</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.facebook.com/profile.php?id=100029087456642'
                                target='_blank'
                                className={styles.contactLink}
                            >
                                <CiFacebook /> <span>Nivel Producción Audiovisual</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href='mailto:produccionesnivel@hotmail.com'
                                target='_blank'
                                className={styles.contactLink}
                            >
                                <CiMail /> <span>produccionesnivel@hotmail.com</span>
                            </a>
                        </li>
                        <li className={styles.contactLink}>
                            <CiLocationOn /> <span>Venustiano Carranza, CDMX</span>  
                        </li>
                        <li>
                            <a
                                href='callto:5584405634'
                                className={styles.contactLink}
                            >
                                <CiPhone /> <span>55 8440 5634</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}