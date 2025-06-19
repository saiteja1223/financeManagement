import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Slide2WhatIsRecession() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.contentBox}>
        <h1 style={styles.heading}>📉 What is a Recession?</h1>
        <div style={styles.content}>
          <ul style={styles.list}>
            <li><span style={styles.icon}>📉</span> A significant decline in economic activity lasting more than a few months.</li>
            <li><span style={styles.icon}>📊</span> Evident in GDP, income, employment, manufacturing, and retail sales.</li>
            <li><span style={styles.icon}>🏛️</span> Officially declared by economic authorities like NBER (U.S.).</li>
          </ul>
          <img
            src="https://suindependent.com/wp-content/uploads/2022/12/Feed-a-Recession-By-John-Darkow.jpg"
            alt="Recession Visual"
            style={styles.image}
          />
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={() => navigate("/slide1")} style={styles.button}>← Previous</button>
          <button onClick={() => navigate("/slide3")} style={styles.button}>Next →</button>
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
    maxWidth: "500px",
    backgroundColor: "#ffffffcc",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    animation: "fadeIn 1s ease-in-out",
  },
  heading: {
    fontSize: "2.3rem",
    textAlign: "center",
    color: "#222",
    marginBottom: "1.5rem",
  },
  content: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
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
    maxWidth: "180px",
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
    padding: "0.5rem 1.1rem",
    fontSize: "0.85rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Slide2WhatIsRecession;
