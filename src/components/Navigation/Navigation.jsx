'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from "react-icons/fa"
import styles from './styles.module.css'

export const Navigation = ()=>{
    const [isActive, setIsActive] = useState(false)
    const activeMenu = ()=> setIsActive(!isActive)
    return (
        <header className={styles.headerWrapper}>
            <nav className={`flexContainer ${styles.navWrapper}`}>
                <figure>
                    <Link href='/'>
                        <img
                            src='https://nivelproduccion.com/assets/logo.png'
                            className={styles.navLogo}
                        />
                    </Link>
                </figure>
                <button className={styles.buttonMenu} onClick={activeMenu}>
                    <FaBars/>
                </button>
                <ul className={`${styles.navList} ${!isActive ? '' : styles.active}`}>
                    <li>
                        <Link
                        href='/'
                        onClick={activeMenu}
                        >
                            Inicio
                        </Link>  
                    </li>
                    <li>
                        <Link
                        href='/videos'
                        onClick={activeMenu}
                        >
                            Videos
                        </Link>  
                    </li>             
                </ul>
            </nav>
        </header>
    )
}