import { Banner } from "@/components"
import { Photos } from "./components/Photos/Photos"
export default function PhotoPage(){
    return (
        <>
            <Banner
                imageUrl='https://www.nivelproduccion.com/assets/photogallery_background.jpg'
                imageResponsiveUrl='https://nivelproduccion.com/assets/making_off.webp'
                title='Fotogalería'
                subtitle='Gracias por confiar en Nivel'
            />
            <Photos/>
        </>
    )
}