'use client'
import { css } from "@emotion/css"
import { Fade } from "react-awesome-reveal"

export const Banner = ({imageUrl, imageResponsiveUrl, title, subtitle})=>{
    const bannerWrapper =css`
        background: url(${imageUrl});
        background-size:cover;
        height: 90vh;
        width:100%;
        @media(min-width:240px) and (max-width:900px){
            height:100%;
        }
        `
    const bannerMask=css`
        align-items:center;
        background: #000000ae;
        color:white;
        display:flex;
        flex-direction: column;
        gap:0.5rem;
        height:100%;
        justify-content:center;
        text-align:center;
        width:100%;
        @media(min-width:240px) and (max-width:900px){
            padding:90px 0;
        }
        `
    const bannerTitle=css`
        font-size:3.5rem;
        @media(min-width:240px) and (max-width:900px){
            font-size:2rem;
        }
    `
    const bannerSubtitle=css`
        font-size:1.5rem;
        font-style:italic;
        @media(min-width:240px) and (max-width:900px){
           font-size:1rem;
        }
        `
    return (
        <section className={bannerWrapper}>
            <div className={bannerMask}>
                <Fade>
                    <h1 className={bannerTitle}>
                        {title}
                    </h1>
                </Fade>
                <Fade>
                    <span className={bannerSubtitle}>
                        {subtitle}
                    </span>
                </Fade>
            </div>
        </section>
    )
}