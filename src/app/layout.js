import './globals.css'
import { Navigation, Footer } from "@/components"

export const metadata = {
  title: "Nivel Producción Audiovisual",
  description: "*",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
