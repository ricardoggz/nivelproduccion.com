import styles from './styles.module.css'

export const Footer = ()=>{
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerMask}>
                <div className={styles.footerContent}>
                    <ul className={styles.footerList}>
                        <li className={styles.footerTitle}>Contacto</li>
                        <li>Facebbok</li>
                        <li>WhatsApp</li>
                    </ul>
                    <ul className={styles.footerList}>
                        <li className={styles.footerTitle}>Contacto</li>
                        <li>Facebbok</li>
                        <li>WhatsApp</li>
                    </ul>
                    <ul className={styles.footerList}>
                        <li className={styles.footerTitle}>Contacto</li>
                        <li>Facebbok</li>
                        <li>WhatsApp</li>
                    </ul>
                </div>
                <div className={styles.footerCopyRight}>
                    <p>&copy; Todos los derechos reservados - Nivel Producción Audiovisual 2024</p>
                </div>
            </div>
        </footer>
    )
}