import { Banner } from "@/components"
import { Contact } from "./components/Contact/Contact"

export default function ContactPage(){
    return (
        <>
            <Banner
                imageUrl='https://nivelproduccion.com/assets/about_photo.webp'
                title='Contacto'
                subtitle='Estaremos más que felices de ayudarte'
            />
            <Contact/>
        </>
    )
}