import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Slide1Agenda() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.contentBox, ...(loaded ? styles.fadeIn : {}) }}>
        <h1 style={styles.heading}>📘 Seminar Agenda</h1>
        <div style={styles.flex}>
          <ul style={styles.list}>
            <li><span style={styles.icon}>🧭</span> What is a Recession?</li>
            <li><span style={styles.icon}>💣</span> Causes of Recession</li>
            <li><span style={styles.icon}>📚</span> Historical Recessions</li>
            <li><span style={styles.icon}>📉</span> Impact on Economy</li>
            <li><span style={styles.icon}>🏢</span> Impact on Businesses and Individuals</li>
            <li><span style={styles.icon}>🏛️</span> Government Responses</li>
            <li><span style={styles.icon}>🛡️</span> How to Prepare for a Recession</li>
            <li><span style={styles.icon}>✅</span> Conclusion</li>
            <li><span style={styles.icon}>❓</span> Q&A</li>
          </ul>
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/645/490/large_2x/global-recession-background-illustration-of-economic-recession-with-red-arrow-symbol-falling-down-free-vector.jpg"
            alt="Agenda Illustration"
            style={styles.image}
          />
        </div>
        <button onClick={() => navigate("/slide2")} style={styles.button}>
          Next →
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    fontFamily: "'Segoe UI', sans-serif",
  },
  contentBox: {
    backgroundColor: "#ffffffcc",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    transform: "translateY(40px)",
    opacity: 0,
    transition: "opacity 1s ease, transform 1s ease",
    maxWidth: "900px",
    width: "100%",
  },
  fadeIn: {
    opacity: 1,
    transform: "translateY(0)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#222",
  },
  flex: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  list: {
    flex: "2",
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
    flex: "1",
    maxWidth: "400px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  button: {
    marginTop: "2rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Slide1Agenda;
