import styles from "./Timeline.module.css";

function TimeLine({ sections, activeIndex, visible }) {
  // Find the last visible index before the current activeIndex
  const getEffectiveIndex = () => {
    let lastVisibleIndex = 0;
    for (let i = 0; i <= activeIndex; i++) {
      if (sections[i]?.showInTimeLine) {
        lastVisibleIndex = i;
      }
    }
    return lastVisibleIndex;
  };

  const effectiveIndex = getEffectiveIndex();

  return (
    <div
      className={`${styles.timeline} ${
        visible ? styles.visible : styles.hidden
      }`}
    >
      {sections.map((section, idx) => {
        return section.showInTimeLine ? (
          <div key={section.id} className={styles.timelineItem}>
            <div
              className={`${styles.dot} ${
                styles[idx === effectiveIndex ? "active" : ""]
              }`}
            />
            <div>
              <div className={styles.label}>{section.label}</div>
              {section.subtitle && (
                <div
                  className={`${styles.subtitle} ${
                    styles[idx === effectiveIndex ? "active" : ""]
                  }`}
                >
                  {section.subtitle}
                </div>
              )}
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}

export default TimeLine;
