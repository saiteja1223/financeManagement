import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Slide10Conclusion() {
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
            <h1 style={styles.heading}>🧠 Conclusion: Understanding Recessions</h1>
            <ul style={styles.list}>
              <li><span style={styles.icon}>📌</span> Recessions are natural parts of economic cycles.</li>
              <li><span style={styles.icon}>📊</span> Key indicators help us predict downturns.</li>
              <li><span style={styles.icon}>🏛️</span> Governments and banks play a crucial role in managing recovery.</li>
              <li><span style={styles.icon}>🧘</span> Staying informed and prepared reduces the impact.</li>
              <li><span style={styles.icon}>🚀</span> Economic recovery always follows — resilience matters.</li>
            </ul>
          </div>

          {/* <img
            src="https://cdn.pixabay.com/photo/2015/05/15/14/47/chart-768472_1280.jpg"
            alt="Economic chart"
            style={styles.rightImage}
          /> */}
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={() => navigate("/slide9")} style={styles.button}>
            ← Previous
          </button>
          <button onClick={() => navigate("/slide11")} style={styles.button}>
            Finish 🎉
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
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
  },
  textContent: {
    flex: 1,
  },
  heading: {
    fontSize: "2.3rem",
    marginBottom: "1.2rem",
    color: "#222",
  },
  list: {
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
  rightImage: {
    width: "220px",
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

export default Slide10Conclusion;
