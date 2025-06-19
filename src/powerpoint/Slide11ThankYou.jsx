import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Slide11ThankYou() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.contentBox,
          ...(loaded ? styles.fadeIn : {}),
        }}
      >
        <div style={styles.textImageWrapper}>
          <div style={styles.textContent}>
            <h1 style={styles.heading}>🎉 Thank You!</h1>
            <p style={styles.paragraph}>
              We hope this presentation helped you understand economic recessions, their causes, effects, and how to stay informed.
            </p>
            <p style={styles.paragraph}>
              Stay curious, stay prepared, and remember — after every downturn, there's a recovery. 💪
            </p>
            <p style={styles.signature}>SAI TEJA</p>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/1484/1484812.png"
            alt="Thank You"
            style={styles.rightImage}
          />
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={() => navigate("/slide10")} style={styles.button}>
            ← Back
          </button>
          <button onClick={() => navigate("/")} style={styles.button}>
            Go to Home 🏠
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "2rem",
  },
  contentBox: {
    backgroundColor: "#ffffffcc",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    padding: "2rem",
    maxWidth: "960px",
    width: "100%",
    transform: "translateY(40px)",
    opacity: 0,
    transition: "opacity 1s ease, transform 1s ease",
  },
  fadeIn: {
    opacity: 1,
    transform: "translateY(0)",
  },
  textImageWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
  },
  textContent: {
    flex: 1,
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1.2rem",
    color: "#222",
  },
  paragraph: {
    fontSize: "1.1rem",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "1rem",
  },
  signature: {
    fontSize: "1rem",
    color: "#555",
    marginTop: "1rem",
    fontStyle: "italic",
  },
  rightImage: {
    width: "180px",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    flexShrink: 0,
  },
  buttonGroup: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.5rem 1rem",
    fontSize: "0.85rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Slide11ThankYou;
