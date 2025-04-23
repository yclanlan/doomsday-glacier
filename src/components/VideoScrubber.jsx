/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VideoScrubber({ videoRef, contentContainerHeight, id, children }) {
  useEffect(() => {
    const video = videoRef.current;
    const scrubberProgress = { value: 0 };

    const handleVideoMetadata = () => {
      if (video) {
        const videoDuration = video.duration;
        const frameRate = 30; // Adjust to your video's actual frame rate
        const totalFrames = Math.round(videoDuration * frameRate);

        // console.log(videoRef, videoDuration);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.scroll-content-${id}`,
            start: "top top",
            end: "bottom+=25% bottom",
            scrub: true,
            // markers: true,
            // onUpdate: (self) => {
            //   console.log("Scroll Progress:", self.progress); // Dynamically log the progress
            // },
          },
        });

        // console.log(tl);

        // Access the ScrollTrigger instance
        // const scrollTriggerInstance = tl.scrollTrigger;

        // Log the progress
        // console.log(scrollTriggerInstance.progress);

        // Map scroll to frame numbers
        tl.to(scrubberProgress, {
          value: 1,
          onUpdate: () => {
            const scrollProgress = scrubberProgress.value;
            const currentFrame = Math.round(scrollProgress * totalFrames);
            const currentTime = currentFrame / frameRate;

            ///******* FOR DEBUG *******///

            // console.log(
            //   "Progress:",
            //   scrollProgress,
            //   "CurrentTime:",
            //   currentTime
            // );

            // Update the video time without skipping frames
            if (video.currentTime !== currentTime) {
              video.currentTime = currentTime;
            }
          },
        });
      }
      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      handleVideoMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleVideoMetadata);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleVideoMetadata);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scrubberProgress.value = 0;
    };
  }, [videoRef]);

  return (
    <div
      className={`scroll-content-${id}`}
      style={{
        height:
          contentContainerHeight /* Adjust the height of the content to make it scrollable */,
        //   background: "#f0f0f0",
      }}
    >
      {children}
    </div>
  );
}

export default VideoScrubber;
