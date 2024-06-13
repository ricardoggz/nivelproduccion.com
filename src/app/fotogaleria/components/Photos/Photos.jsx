'use client'
import { images } from "./const"
import styles from "./styles.module.css"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export const Photos = () => {
  return (
    <section className={`paddingSection ${styles.photosWrapper}`}>
        <ImageGallery
            items={images}
            showThumbnails
            lazyLoad
          />
    </section>
  );
};
