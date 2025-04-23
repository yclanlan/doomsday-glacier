import styles from "./Textbox.module.css";

function Textbox(props) {
  const { children, position = "left", yPosition } = props;

  const textStyle = {
    color: "white",
  };

  return (
    <div
      className={styles.textBoxContainer}
      style={{
        top: `${yPosition}vh`,
        marginLeft: position === "left" ? "4rem" : "auto",
        marginRight: position === "right" ? "4rem" : "auto",
      }}
    >
      <p style={textStyle}>{children}</p>
    </div>
  );
}

export default Textbox;
