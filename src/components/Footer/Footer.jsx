import styles from './styles.module.css'
import { IoLocationSharp } from "react-icons/io5"
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io"
import { FaFacebook, FaWhatsapp, FaYoutube  } from "react-icons/fa"

export const Footer = ()=>{
    return (
        <footer className={styles.footerWrapper}>
            <div className={`paddingSection maskContainer ${styles.footerMask}`}>
                <div className={styles.footerContent}>
                    <ul className={styles.footerList}>
                        <li className={styles.footerTitle}>Social</li>
                        <li>
                            <a
                                href='https://www.facebook.com/profile.php?id=100029087456642'
                                target='_blank'
                            >
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.youtube.com/@nivelproduccionaudiovisual9266'
                                target='_blank'
                            >
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.footerList}>
                        <li className={styles.footerTitle}>Ubicación</li>
                        <li
                            style={{
                                fontSize:'36px'
                            }}
                        >
                            <IoLocationSharp/>
                        </li>
                        <li>Venustiano Carranza, CDMX</li>
                    </ul>
                    <ul className={styles.footerList}>
                        <li className={styles.footerTitle}>Contacto directo</li>
                        <li>
                            <a
                                href='https://wa.me/525584405634'
                                target='_blank'
                            >
                                <IoLogoWhatsapp />
                            </a>
                        </li>
                        <li>
                            <a
                                href='mailto:produccionesnivel@hotmail.com'
                                target='_blank'
                            >
                                <IoMdMail />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerCopyRight}>
                    <p>&copy; Todos los derechos reservados - Nivel Producción Audiovisual 2024</p>
                </div>
            </div>
        </footer>
    )
}