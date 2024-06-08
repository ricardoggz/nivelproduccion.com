import { Banner } from "@/components"
import { Services } from "./components/Services/Services"

export default function Home() {
  return (
    <>
      <Banner
        imageUrl='https://nivelproduccion.com/assets/banner.webp'
        title='Contamos historias'
        subtitle='Nivel Producción Audiovisual'
      />
      <Services/>
    </>
  )
}
