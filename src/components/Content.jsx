import styles from "./Content.module.css";
import ContentItem from "./ContentItem";
import Draggable from "./Draggable";

function Content({ sections, sectionRefs }) {
  return (
    <div className={styles.content}>
      {/* <div
        id={sections[0].id}
        ref={(el) => (sectionRefs.current[0] = el)}
        className={styles.section}
      >
        <div className={styles.textOverlay}>
          <h2>{sections[0].label}</h2>
          <p>This is content for {sections[0].label}.</p>
        </div>
      </div> */}

      <div
        id={sections[0].id}
        ref={(el) => (sectionRefs.current[0] = el)}
        className={styles.section}
      >
        <div className={styles.textOverlay}>
          <h2>{sections[0].label}</h2>
          <p>This is content for {sections[0].label}.</p>
        </div>
      </div>

      <div
        id={sections[1].id}
        ref={(el) => (sectionRefs.current[1] = el)}
        className={styles.section}
      >
        <div className={styles.textOverlay}>
          <h2>{sections[1].label}</h2>
          <p>This is content for {sections[1].label}.</p>
        </div>
      </div>

      <div
        id={sections[2].id}
        ref={(el) => (sectionRefs.current[2] = el)}
        className={styles.section}
      >
        <Draggable />
      </div>

      {/* {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={styles.section}
        >
          <div className={styles.textOverlay}>
            <h2>{section.label}</h2>
            <p>This is content for {section.label}.</p>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default Content;
