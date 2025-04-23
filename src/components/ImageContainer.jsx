import styles from "./ImageContainer.module.css";

function ImageContainer({ src, caption, credit, width }) {
  return (
    <div
      className={styles.imageContainer}
      style={{ width: width || undefined }}
    >
      <img src={src} style={{ width: "100%", height: "auto" }}></img>
      <p
        style={{
          textAlign: "left",
          width: "100%",
          fontFamily: "Roboto",
          fontSize: "0.95rem",
          fontWeight: "500",
          lineHeight: "1.4rem",
          padding: "0.5rem 0",
        }}
      >
        {caption}

        <span style={{ fontSize: "0.88rem", color: "#C9C9C9" }}>{credit}</span>
      </p>
    </div>
  );
}

export default ImageContainer;
