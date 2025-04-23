/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Textbox from "./Textbox";

gsap.registerPlugin(ScrollTrigger);

function VideoScrubber({ videoRef, contentContainerHeight, children }) {
  useEffect(() => {
    const video = videoRef.current;
    // console.log(video);

    // Ensure the video is loaded before manipulating its playback
    const handleVideoMetadata = () => {
      if (video) {
        const videoDuration = video.duration;

        // Create GSAP timeline with ScrollTrigger
        const tl = gsap.timeline({
          defaults: { duration: 1 },
          scrollTrigger: {
            trigger: ".scroll-content", // The container of the video
            start: "top top", // Trigger when the top of the container hits the top of the viewport
            end: "bottom+=1 bottom", // Trigger when the bottom of the container hits the bottom of the viewport
            scrub: true, // Scrub the scroll position to control the animation smoothly
            markers: true, // Optional: to see the start and end markers of ScrollTrigger (for debugging)
          },
        });

        // Animate the video playback based on scroll position
        tl.fromTo(
          video,
          { currentTime: 0 }, // Start at the beginning of the video
          {
            currentTime: videoDuration || 1,
            onUpdate: () => {
              // Ensure the video doesn't exceed its duration
              if (video.currentTime >= videoDuration) {
                video.currentTime = videoDuration; // Stay just under the max duration
              }
            }, // End at the video's duration
          }
        );
      }
    };

    // Add event listener to handle video metadata load
    if (video.readyState >= 1) {
      handleVideoMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleVideoMetadata);
    }

    // Cleanup event listener on component unmount
    return () => {
      video.removeEventListener("loadedmetadata", handleVideoMetadata);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill any active ScrollTriggers
    };
  }, []);

  return (
    <div
      className="scroll-content"
      style={{
        height:
          contentContainerHeight /* Adjust the height of the content to make it scrollable */,
        //   background: "#f0f0f0",
      }}
    >
      <div id="textbox-container">{children}</div>
    </div>
  );
}

export default VideoScrubber;
