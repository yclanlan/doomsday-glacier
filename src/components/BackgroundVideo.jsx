import styles from "./BackgroundVideo.module.css";
import { useEffect, useState } from "react";

function BackgroundVideo({ section, name, videoRef, isMobile }) {
  const ifPlay = section.background.play;
  const [currentSource, setCurrentSource] = useState(
    isMobile && section.background.mobileSrc 
      ? section.background.mobileSrc 
      : section.background.src
  );

  useEffect(() => {
    // Update source when isMobile state changes
    const newSource = isMobile && section.background.mobileSrc 
      ? section.background.mobileSrc 
      : section.background.src;
    
    setCurrentSource(newSource);
    
    if (!videoRef?.current) return;
    
    const video = videoRef.current;
    
    // Reload video when switching sources
    const loadVideo = () => {
      // Pause the video first
      video.pause();
      
      // Update the source element's src attribute
      const sourceElement = video.querySelector('source');
      if (sourceElement) {
        sourceElement.setAttribute('src', newSource);
      }
      
      // Reload the video
      video.load();
      
      // Replay the video if autoplay is needed
      if (ifPlay) {
        // Use a promise to ensure playback after loading
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
              console.log("Video playback started successfully");
            })
            .catch(error => {
              // Playback failed (usually due to browser autoplay policy)
              console.error("Video playback failed:", error);
            });
        }
      }
      
      // Ensure the first frame is visible (fixes issues on some mobile devices)
      video.currentTime = 0.01;
    };
    
    // Reload the video
    loadVideo();
    
    // Add event listener for when metadata is loaded
    const handleMetadata = () => {
      console.log("Video metadata loaded:", newSource);
      // Ensure ScrollTrigger has correct video duration info
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    };
    
    video.addEventListener('loadedmetadata', handleMetadata);
    
    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata);
    };
  }, [isMobile, section.background.mobileSrc, section.background.src, videoRef, ifPlay]);

  return (
    <div className={`${styles.videoContainer} ${name}`}>
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        autoPlay={ifPlay}
        loop={ifPlay}
        className={styles.video}
      >
        <source src={currentSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
