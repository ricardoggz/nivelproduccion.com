'use client'
import { useState, useEffect} from 'react'

export const Banner = ({imageUrl, imageResponsiveUrl, title, subtitle})=>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    const bannerWrapper ={
        backgroundImage: windowWidth < 900 ? `url(${imageResponsiveUrl})` : `url(${imageUrl})`,
        backgroundPosition: windowWidth < 900 ? 'top' : 'center',
        backgroundSize:'cover',
        height:'90vh',
        width:'100%'
    }
    const bannerMask={
        alignItems:'center',
        background:'#191816ae',
        color:'white',
        display:'flex',
        flexDirection:'column',
        gap:'0.5rem',
        height:'100%',
        justifyContent:'center',
        textAlign:'center',
        width:'100%',
    }
    const bannerTitle={
        fontSize:'40px',
    }
    const bannerSubtitle={
        fontSize:'20px',
        fontStyle:'italic'
    }
    return (
        <section style={bannerWrapper}>
            <div style={bannerMask}>
                <h1 style={bannerTitle}>
                    {title}
                </h1>
                <span style={bannerSubtitle}>
                    {subtitle}
                </span>
            </div>
        </section>
    )
}