import { useEffect, useRef, useState } from "react";
import styles from "./Background.module.css";

function Background({ background }) {
  const videoRef = useRef(null);
  const [fade, setFade] = useState(false);
  const [currentBg, setCurrentBg] = useState(background);

  useEffect(() => {
    if (videoRef.current) {
      if (background.play) {
        videoRef.current.play(); // Start playing the video
      } else {
        videoRef.current.pause(); // Pause the video
      }
    }
  }, [background]);

  useEffect(() => {
    if (currentBg !== background) {
      setCurrentBg(background);
      // Start fade out
      // setFade(true);

      // After a short delay, switch backgrounds and fade back in
      // const fadeTimeout = setTimeout(() => {
      // setCurrentBg(background);
      // setFade(false);
      // }, 500); // Adjust for fade duration

      // return () => clearTimeout(fadeTimeout);
    }
  }, [background, currentBg]);

  return (
    <div className={styles.backgroundLayer}>
      {currentBg.type === "video" ? (
        <video
          className={`${styles.backgroundVideo} ${
            fade ? styles.fadeOut : styles.fadeIn
          }`}
          ref={videoRef}
          autoPlay={currentBg.play}
          muted
          loop
        >
          <source src={currentBg.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className={`${styles.backgroundImage} ${
            fade ? styles.fadeOut : styles.fadeIn
          }`}
          style={{ backgroundImage: `url(${currentBg.src})` }}
        />
      )}
    </div>
  );
}

export default Background;
