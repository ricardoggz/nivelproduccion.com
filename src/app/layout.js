import './globals.css'
import { Inter } from "next/font/google"
import { Navigation } from "@/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nivel Producción Audiovisual",
  description: "*",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
