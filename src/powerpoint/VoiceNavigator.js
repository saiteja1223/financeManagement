import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VoiceNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Ordered list of your slide routes
  const slideRoutes = [
    "/slide0",
    "/slide1",
    "/slide2",
    "/slide3",
    "/slide4",
    "/slide5",
    "/slide6",
    "/slide7",
    "/slide8",
    "/slide9",
    "/slide10",
    "/slide11"
  ];

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      console.log("Heard:", transcript);

      const currentIndex = slideRoutes.indexOf(location.pathname);

      if (transcript.includes("next")) {
        if (currentIndex !== -1 && currentIndex < slideRoutes.length - 1) {
          const nextSlide = slideRoutes[currentIndex + 1];
          console.log("Navigating to:", nextSlide);
          navigate(nextSlide);
        }
      }

      if (transcript.includes("back")) {
        if (currentIndex > 0) {
          const prevSlide = slideRoutes[currentIndex - 1];
          console.log("Navigating to:", prevSlide);
          navigate(prevSlide);
        }
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [location.pathname, navigate]);

  return null;
};

export default VoiceNavigator;
