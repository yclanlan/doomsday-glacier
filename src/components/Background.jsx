/* eslint-disable react/no-unescaped-entities */
import styles from "./Background.module.css";
import BackgroundVideo from "./BackgroundVideo";
import BackgroundImage from "./BackgroundImage";

function Background({
  sections,
  activeIndex,
  openingAnimationRef,
  structureRef,
  factorsRef,
  isMobile,
}) {
  

  return (
    <div className={styles.backgroundLayer}>
      {sections.map((section, idx) => {
        if (!section.background) {
          return <></>;
        }
        if (section.background.type === "video") {
          return (
            <BackgroundVideo
              key={section.id}
              section={section}
              name={`${styles.backgroundItem} ${
                // section.id === activeSection ? styles.active : ""
                idx === activeIndex ? styles.active : ""
              }`}
              videoRef={
                idx === 0
                  ? openingAnimationRef
                  : idx === 1
                  ? structureRef
                  : idx === 5
                  ? factorsRef
                  : null
              }
              isMobile={isMobile} 
            />
          );
        } else if (section.background.type === "image") {
          return (
            <BackgroundImage
              key={section.id}
              section={section}
              name={`${styles.backgroundItem}  ${
                idx === activeIndex ? styles.active : ""
              }`}
            />
          );
        } else if (section.background.type === "fill") {
          return (
            <div
              key={section.id}
              className={`${styles.backgroundItem}  ${
                idx === activeIndex ? styles.active : ""
              }`}
              style={{
                backgroundColor: section.background.src,
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Centers content vertically
                justifyContent: "center", // Centers content horizontally
              }}
            ></div>
          );
        }
      })}
    </div>
  );
}

export default Background;
