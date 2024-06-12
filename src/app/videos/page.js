import { Banner } from '@/components'
import {Videos} from './components/Videos/Videos'

export default function VideoPage(){
    return (
        <>
            <Banner
                imageUrl='https://www.nivelproduccion.com/assets/about_background.webp'
                imageResponsiveUrl='https://nivelproduccion.com/assets/making_off.webp'
                title='Videos'
                subtitle='Galería'
            />
            <Videos/>
        </>
    )
}