import { Banner } from "@/components"
import { About } from "./components/About/About"
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
      <About />
    </>
  )
}
