import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Slide3CausesOfRecession() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.contentBox, ...(loaded ? styles.fadeIn : {}) }}>
        <h1 style={styles.heading}>💥 Causes of Recession</h1>
        <div style={styles.innerContent}>
          <ul style={styles.list}>
            <li><span style={styles.icon}>🔥</span> High inflation or deflation</li>
            <li><span style={styles.icon}>💸</span> Interest rate hikes</li>
            <li><span style={styles.icon}>🏦</span> Financial crises (e.g., 2008)</li>
            <li><span style={styles.icon}>🌍</span> Global events (e.g., pandemics, wars)</li>
            <li><span style={styles.icon}>⚡</span> Sudden economic shocks</li>
            <li><span style={styles.icon}>📉</span> Asset bubbles bursting</li>
          </ul>
          <img
            src="https://thumbs.dreamstime.com/z/causes-recession-significant-widespread-prolonged-economic-slow-down-stagnation-economical-activity-decline-sign-flat-258722288.jpg"
            alt="Causes of Recession Illustration"
            style={styles.image}
          />
        </div>
        <div style={styles.buttonGroup}>
          <button onClick={() => navigate("/slide2")} style={styles.button}>
            ← Previous
          </button>
          <button onClick={() => navigate("/slide4")} style={styles.button}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  contentBox: {
    maxWidth: "900px",
    backgroundColor: "#ffffffcc",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    transform: "translateY(40px)",
    opacity: 0,
    transition: "opacity 1s ease, transform 1s ease",
  },
  fadeIn: {
    opacity: 1,
    transform: "translateY(0)",
  },
  heading: {
    fontSize: "2.3rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#222",
  },
  innerContent: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },
  list: {
    flex: 2,
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "1.2rem",
    color: "#333",
    lineHeight: "2",
  },
  icon: {
    marginRight: "0.7rem",
    fontSize: "1.3rem",
  },
  image: {
    flex: 1,
    maxWidth: "160px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
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

export default Slide3CausesOfRecession;
