import styles from './styles.module.css'

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
                        <span>Datos de contacto</span>
                    </center>
                </div>
            </div>
        </section>
    )
}