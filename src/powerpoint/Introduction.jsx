import React from "react";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const navigate = useNavigate();

  const styles = {
    slide: {
      height: "100vh",
      backgroundImage: "url('https://tse1.mm.bing.net/th/id/OIP.lA8d6neP_dSqcSp4OafBAgHaD4?pid=Api&P=0&h=180')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
      padding: "20px",
      textAlign: "center"
    },
    heading: {
      fontSize: "4rem",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "2rem",
      marginBottom: "30px",
    },
    name: {
      fontSize: "1.5rem",
      fontStyle: "italic",
      marginBottom: "30px"
    },
    button: {
      padding: "10px 20px",
      fontSize: "1.2rem",
      backgroundColor: "#FFD700",
      color: "#333",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    }
  };

  const goToSlide1 = () => {
    navigate("/slide1");
  };

  return (
    <div style={styles.slide}>
      <h1 style={styles.heading}>Welcome</h1>
      <h2 style={styles.subheading}>Presentation on <span style={{ color: "#FFD700" }}>Recession</span></h2>
      <p style={styles.name}>By Saiteja</p>
      <button style={styles.button} onClick={goToSlide1}>
        Next ➜
      </button>
    </div>
  );
};

export default Introduction;
