import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Slide6ImpactOfRecessions() {
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
            <h1 style={styles.heading}>📊 Impact on Businesses and Individuals</h1>
            <ul style={styles.list}>
              <li><span style={styles.icon}>👷‍♂️</span> Rise in unemployment rates</li>
              <li><span style={styles.icon}>🏘️</span> Housing market crashes</li>
              <li><span style={styles.icon}>📉</span> Fall in stock markets</li>
              <li><span style={styles.icon}>📦</span> Reduced consumer demand</li>
              <li><span style={styles.icon}>🏭</span> Business closures and bankruptcies</li>
            </ul>
          </div>

          <img
            src="https://www.godigit.com/content/dam/godigit/directportal/lifehm/he-causes-of-recession-in-an-economy.jpg"
            alt="Impact of Recession"
            style={styles.rightImage}
          />
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={() => navigate("/slide5")} style={styles.button}>
            ← Previous
          </button>
          <button onClick={() => navigate("/slide7")} style={styles.button}>
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
    width: "320px",
    height: "auto",
    marginTop:"5rem",
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

export default Slide6ImpactOfRecessions;
