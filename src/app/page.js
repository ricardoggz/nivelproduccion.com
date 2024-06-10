import { Banner } from "@/components"
import { About } from "./components/About/About"
import { Services } from "./components/Services/Services"

export default function Home() {
  return (
    <>
      <Banner
        imageUrl='https://nivelproduccion.com/assets/jumbotron.webp'
        imageResponsiveUrl='https://nivelproduccion.com/assets/making_off.webp'
        title='Nivel Producción Audiovisual'
        subtitle='Contamos Historias'
      />
      <Services/>
      <About />
    </>
  )
}
