export const Banner = ({imageUrl, title, subtitle})=>{
    const bannerWrapper ={
        backgroundImage:`url(${imageUrl})`,
        backgroundPosition:'center',
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