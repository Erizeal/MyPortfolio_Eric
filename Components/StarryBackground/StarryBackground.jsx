import React, { useEffect } from "react";
import "./StarryBackground.scss";

function StarryBackground() {
  useEffect(() => {
    // Create custom cursor
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      // Move custom cursor
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Create star trail
      const star = document.createElement("div");
      star.className = "star";

      // Gray shades
      const colors = ["#ffffff", "#cccccc", "#999999", "#666666"];
      star.style.background = colors[Math.floor(Math.random() * colors.length)];
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cursor.remove();
    };
  }, []);

  return null;
}

export default StarryBackground;