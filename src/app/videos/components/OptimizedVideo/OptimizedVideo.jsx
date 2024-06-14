"use client";
import { useState, useEffect, useRef } from "react";

export const OptimizedVideo = ({ link }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef();
  useEffect(() => {
    if ("IntersectionObserver" in window && videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(videoRef.current);

      return () => {
        if (observer && observer.unobserve) {
          observer.unobserve(videoRef.current);
        }
      };
    } else {
      // Fallback if IntersectionObserver is not supported
      setIsVisible(true);
    }
  }, []);

  return (
    <>
      {
        !isVisible ?
        <div>Cargando...</div>
        :
        <iframe
          width="100%"
          height="315"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      }
    </>
  );
};
