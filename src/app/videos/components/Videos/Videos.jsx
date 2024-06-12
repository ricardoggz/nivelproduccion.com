import { videos } from './consts'
import styles from './styles.module.css'

export const Videos=()=>{
    return (
        <section className={styles.videosWrapper}>
            <div  className={`paddingSection`}>
                <div className={`flexContainer ${styles.videosGrid}`}>
                    {videos.map((video)=>(
                        <iframe
                        key={video.id}
                        width="100%"
                        height="315"
                        src={video.link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        />
                    ))}       
                </div>
            </div>
        </section>
    )
}