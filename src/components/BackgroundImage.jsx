import styles from "./BackgroundImage.module.css";

function BackgroundImage({ section, name }) {
  const source = section.background.src;
  //   return <div className={name} style={{ backgroundImage: `url(${source})` }} />;
  return (
    // <div className={name}>
    //   <img src={source} alt="" />
    // </div>
    <div
      className={name}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute", // Changed from 'relative' to 'absolute'
        top: 0, // Added to ensure it starts from the top
        left: 0, // Added to ensure it starts from the left
        overflow: "hidden",
      }}
    >
      <img
        src={source}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}

export default BackgroundImage;
