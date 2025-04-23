import { useRef } from "react";

import styles from "./Draggable.module.css";

function Draggable() {
  const sliderRef = useRef(null);
  const beforeImageRef = useRef(null);
  const sliderButtonRef = useRef(null);
  const sliderLineRef = useRef(null);

  const beforeImage = beforeImageRef.current;
  const sliderButton = sliderButtonRef.current;
  const sliderLine = sliderLineRef.current;

  let width;

  function handleSliderInput(e) {
    // const slider = sliderRef.current;

    const sliderValue = e.target.value;
    width = beforeImage.offsetWidth;
    const height = beforeImage.offsetHeight;
    const newClip = (sliderValue / 100) * width;

    // Apply the clipping to the image and move the button and line
    // beforeImage.style.clip = `rect(0, ${newClip}px, ${height}px, 0)`;
    // sliderButton.style.left = `${newClip}px`;
    // sliderLine.style.left = `${newClip}px`;
    beforeImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
    sliderButton.style.left = `${sliderValue}%`;
    sliderLine.style.left = `${sliderValue}%`;
  }

  //   useEffect(() => {
  //     const slider = sliderRef.current;
  //     const beforeImage = beforeImageRef.current;
  //     const sliderButton = sliderButtonRef.current;
  //     const sliderLine = sliderLineRef.current;

  //     const handleSliderInput = (e) => {
  //       const sliderValue = e.target.value;
  //       const width = beforeImage.offsetWidth;
  //       const newClip = (sliderValue / 100) * width;

  //       // Apply the clipping to the image and move the button and line
  //       beforeImage.style.clip = `rect(0, ${newClip}px, 550px, 0)`;
  //       sliderButton.style.left = `${newClip}px`;
  //       sliderLine.style.left = `${newClip}px`;
  //     };

  //     slider.addEventListener("input", handleSliderInput);

  //     // Clean up event listener on component unmount
  //     return () => {
  //       slider.removeEventListener("input", handleSliderInput);
  //     };
  //   }, []);

  return (
    <div className={styles.container} style={{}}>
      <div className={styles.imgWrapper}>
        <img
          src="https://cdn.glitch.global/1ae17f3f-d894-43e4-bfeb-bc4a11ad0df2/Frame%2041.png?v=1722996190585"
          alt="After Image"
          className={styles.after}
        />
        <img
          ref={beforeImageRef}
          src="https://cdn.glitch.global/1ae17f3f-d894-43e4-bfeb-bc4a11ad0df2/Frame%2042.png?v=1722996185642"
          alt="Before Image"
          className={styles.before}
        />
      </div>
      <input
        ref={sliderRef}
        type="range"
        min="0"
        max="100"
        value="50"
        className={styles.slider}
        onChange={handleSliderInput}
      />
      <div ref={sliderLineRef} className={styles.sliderLine}></div>
      <div
        ref={sliderButtonRef}
        className={styles.sliderButton}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Draggable;
