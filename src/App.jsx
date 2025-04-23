import { useEffect, useState, useRef } from "react";
import styles from "./App.module.css";
import Background from "./components/Background";
import Timeline from "./components/TimeLine";
import ScrollamaContainer from "./components/ScrollamaContainer";

const sections = [
  {
    id: "00",
    label: "opening animation",
    background: {
      type: "video",
      src: "./assets/opening-output.mp4",
      mobileSrc: "./assets/opening-phone-output.mp4",
      play: false,
    },
    showInTimeLine: false,
  },
  {
    id: "01",
    label: "glacier structure",
    background: {
      type: "video",
      src: "./assets/structure-output.mp4",
      mobileSrc: "./assets/structure-phone-output.mp4",
      play: false,
    },
    showInTimeLine: false,
  },
  {
    id: "02",
    label: "2004",
    background: { type: "fill", src: "#68757D", play: false },
    showInTimeLine: true,
    subtitle: "The First Crack",
  },
  {
    id: "03",
    label: "2014",
    background: {
      type: "video",
      src: "./assets/time-lapse-output.mp4",
      play: true,
    },
    showInTimeLine: true,
    subtitle: "Satellite evidence of glacier extension breaking apart",
  },
  {
    id: "04",
    label: "2019",
    background: { type: "fill", src: "#68757D", play: false },
    showInTimeLine: true,
    subtitle: "Collapse of the ice tongue",
  },
  {
    id: "05",
    label: "melting factors",
    background: {
      type: "video",
      src: "./assets/factors-output.mp4",
      mobileSrc: "./assets/factors-phone-output.mp4",
      play: false,
    },
    showInTimeLine: false,
  },
  {
    id: "06",
    label: "Late 2019",
    background: {
      type: "fill",
      src: "#68757D",
      play: false,
    },
    showInTimeLine: true,
    subtitle: "Borehole discoveries beneath the glacier",
  },
  {
    id: "07",
    label: "Project MELT",
    background: {
      type: "image",
      src: "./assets/bg-borehole-drilling.png",
      play: false,
    },
    showInTimeLine: false,
  },
  {
    id: "08",
    label: "Icefin",
    background: {
      type: "video",
      src: "./assets/icefin-bg-output.mp4",
      play: true,
    },
    showInTimeLine: false,
  },
  {
    id: "09",
    label: "Melting rate calculation",
    background: {
      type: "fill",
      src: "#68757D",
      play: false,
    },
    showInTimeLine: false,
  },
  {
    id: "10",
    label: "2022",
    background: {
      type: "image",
      src: "./assets/bg-cracks.png",
      play: false,
    },
    showInTimeLine: true,
    subtitle: "Unprecedented glacier melting rates in western Thwaites",
  },
  {
    id: "11",
    label: "2022-1",
    background: {
      type: "video",
      src: "./assets/icefin-underwater-output.mp4",
      play: true,
    },
    showInTimeLine: false,
  },
  {
    id: "12",
    label: "2030",
    background: {
      type: "fill",
      src: "#68757D",
      play: false,
    },
    showInTimeLine: true,
    subtitle: "Last Anchor",
  },
  {
    id: "13",
    label: "Data Viz",
    background: {
      type: "fill",
      src: "#68757D",
      play: false,
    },
    showInTimeLine: false,
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTimeline, setShowTimeline] = useState(false); // Controls animation
  const [isMobile, setIsMobile] = useState(false);

  const openingAnimationRef = useRef(null);
  const structureRef = useRef(null);
  const factorsRef = useRef(null);

    useEffect(() => {
      const checkMobile = () => {
        const mobile = window.innerWidth <= 768;
        setIsMobile(mobile);
      };

      checkMobile();
      
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

  useEffect(() => {
    if (activeIndex > 1 && activeIndex < sections.length - 1) {
      setShowTimeline(true);
    } else {
      setShowTimeline(false);
    }
  }, [activeIndex]);

  return (
    <div className={styles.app}>
      <Background
        sections={sections}
        activeIndex={activeIndex}
        openingAnimationRef={openingAnimationRef}
        structureRef={structureRef}
        factorsRef={factorsRef}
        isMobile={isMobile} 
      />

      <Timeline
        sections={sections}
        activeIndex={activeIndex}
        visible={showTimeline}
      />

      {/* <div
        style={{
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          borderRadius: "5px",
          zIndex: 10,
        }}
      >
        Current Step: {activeIndex !== null ? activeIndex + 1 : "None"}
      </div> */}

      {/* Scrollama Steps */}
      <ScrollamaContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        sections={sections}
        openingAnimationRef={openingAnimationRef}
        structureRef={structureRef}
        factorsRef={factorsRef}
        isMobile={isMobile} 
      ></ScrollamaContainer>
    </div>
  );
}

export default App;
