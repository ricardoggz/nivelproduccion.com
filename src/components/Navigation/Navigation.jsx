'use client'
import { useState } from 'react'
import { FaBars } from "react-icons/fa"
import styles from './styles.module.css'

export const Navigation = ()=>{
    const [isActive, setIsActive] = useState(false)
    const activeMenu = ()=> setIsActive(!isActive)
    return (
        <header className={styles.headerWrapper}>
            <nav className={`flexContainer ${styles.navWrapper}`}>
                <div>
                    NIVELPRODUCCION
                </div>
                <button className={styles.buttonMenu} onClick={activeMenu}>
                    <FaBars/>
                </button>
                <ul className={`${styles.navList} ${!isActive ? '' : styles.active}`}>
                    <li>Inicio</li>
                </ul>
            </nav>
        </header>
    )
}