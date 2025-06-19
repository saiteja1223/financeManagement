import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Slide8SectorImpact() {
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
            <h1 style={styles.heading}>🏭 Impact on Different Sectors</h1>
            <ul style={styles.list}>
              <li><span style={styles.icon}>🏦</span> Banking & Finance: Tightened credit, layoffs</li>
              <li><span style={styles.icon}>🏗️</span> Construction: Delays and reduced investments</li>
              <li><span style={styles.icon}>🛍️</span> Retail: Decline in consumer spending</li>
              <li><span style={styles.icon}>✈️</span> Travel & Hospitality: Massive downturns</li>
              <li><span style={styles.icon}>💻</span> Tech: Hiring freezes, slower growth</li>
            </ul>
          </div>

          <img
            src="https://paymentcloudinc.com/blog/wp-content/uploads/2022/07/man-crying-over-bills-when-he-finds-out-what-causes-a-recession-1536x1012.png"
            alt="Sector Impact"
            style={styles.rightImage}
          />
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={() => navigate("/slide7")} style={styles.button}>
            ← Previous
          </button>
          <button onClick={() => navigate("/slide9")} style={styles.button}>
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
    marginTop: "3.5rem",
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

export default Slide8SectorImpact;
