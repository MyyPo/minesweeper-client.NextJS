import styles from "./Auth.module.css";

function Success() {
  return (
    <div style={{ height: "22rem", lineHeight: "22rem" }}>
      <p
        className={styles.commit_correct_text}
        style={{
          display: "inline-block",
          verticalAlign: "middle",
          lineHeight: "3rem",
        }}
      >
        Registration completed
        <br />
        reloading...
      </p>
    </div>
  );
}

export default Success;
