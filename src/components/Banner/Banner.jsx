'use client'
import { useMediaQuery } from "react-responsive"

export const Banner = ({imageUrl, imageResponsiveUrl, title, subtitle})=>{
    const isMobile = useMediaQuery({
        query:'(min-width:240px) and (max-width:900px)'
    })
    const bannerWrapper ={
        backgroundImage: `url(${imageUrl})`,
        backgroundSize:'cover',
        height: !isMobile ? '90vh' : '100%',
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
        padding: !isMobile ? '0' : '100px 0',
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