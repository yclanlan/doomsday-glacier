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
    // 当 isMobile 状态改变时更新源
    const newSource = isMobile && section.background.mobileSrc 
      ? section.background.mobileSrc 
      : section.background.src;
    
    setCurrentSource(newSource);
    
    if (!videoRef?.current) return;
    
    const video = videoRef.current;
    
    // 确保在切换源时重新加载视频
    const loadVideo = () => {
      // 先暂停视频
      video.pause();
      
      // 更新 source 元素的 src 属性
      const sourceElement = video.querySelector('source');
      if (sourceElement) {
        sourceElement.setAttribute('src', newSource);
      }
      
      // 重新加载视频
      video.load();
      
      // 如果需要自动播放，重新播放
      if (ifPlay) {
        // 使用 Promise 确保加载后再播放
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // 自动播放成功
              console.log("Video playback started successfully");
            })
            .catch(error => {
              // 自动播放失败（通常是浏览器策略阻止）
              console.error("Video playback failed:", error);
            });
        }
      }
      
      // 确保视频首帧是可见的（解决一些移动设备上的问题）
      video.currentTime = 0.01;
    };
    
    // 重新加载视频
    loadVideo();
    
    // 添加元数据加载事件监听器
    const handleMetadata = () => {
      console.log("Video metadata loaded:", newSource);
      // 确保 ScrollTrigger 有正确的视频持续时间信息
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