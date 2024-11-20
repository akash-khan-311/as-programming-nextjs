"use client";
import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Ensure the code runs only on the client
    if (typeof window !== "undefined") {
      const Tawk_API = window.Tawk_API || {};
      const Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/673d737e4304e3196ae56e06/1id40ma08";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);

      return () => {
        // Optional: Clean up script on component unmount
        document.body.removeChild(script);
      };
    }
  }, []);

  return null; // No visual rendering required
};

export default TawkToWidget;
