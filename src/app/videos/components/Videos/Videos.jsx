import { videos } from './consts'
import styles from './styles.module.css'
import { OptimizedVideo } from '../OptimizedVideo/OptimizedVideo'

export const Videos=()=>{
    return (
        <section className={styles.videosWrapper}>
            <div  className={`paddingSection`}>
                <div className={`flexContainer ${styles.videosGrid}`}>
                    {videos.map((video)=>(
                        <OptimizedVideo
                            link={video.link}
                            key={video.id}
                        />
                    ))}       
                </div>
            </div>
        </section>
    )
}