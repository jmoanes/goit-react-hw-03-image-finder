import React, { useEffect } from "react";
import "./styles.css";

export default function Modal({ children, onClose }) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
