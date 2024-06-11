import styles from './styles.module.css'

export const About = ()=>{
    return (
        <section className={styles.aboutWrapper}>
            <div className={`paddingSection ${styles.aboutMask}`}>
                <div className={`flexContainer ${styles.aboutDescription}`}>
                    <figure>
                        <img src='https://nivelproduccion.com/assets/about_photo.webp' />
                    </figure>
                    <div className={styles.aboutText}>
                        <span className={styles.aboutTitle}>Nosotros</span>
                        <p>
                            Somos una empresa joven en la Ciudad de México, ofrecemos servicios de videograbación creativa para empresas, eventos sociales, culturales, artísticos y deportivos.
                        </p>
                        <p>
                            El producto final que ofrecemos está hecho bajo un cuidadoso argumento audiovisual y con una producción hecha a la medida de las necesidades de nuestros clientes.
                        </p>
                        <p>
                            “Aceptamos con orgullo nuestro potencial para ofrecerlo al cliente y con profesionalismo nuestras limitaciones para superarlas”
                        </p>
                        <quote>- Fernando O. -</quote>
                    </div>
                </div>
            </div>
            
        </section>
    )
}