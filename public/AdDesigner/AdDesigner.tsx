import React, { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Vanilla");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  return (
    <div
      className={`ad-designer ${isDarkTheme ? "dark-theme" : "light-theme"}`}
    >
      <h2>Ad Designer</h2>
      <div className="flavor-buttons">
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <div className="theme-buttons">
        <button onClick={() => setIsDarkTheme(false)} disabled={!isDarkTheme}>
          Light Theme
        </button>
        <button onClick={() => setIsDarkTheme(true)} disabled={isDarkTheme}>
          Dark Theme
        </button>
      </div>
      <div className="font-size">
        <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
        <span>Font Size: {fontSize}px</span>
        <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
      </div>
      <div className="ad-preview">
        <div className="ad-content" style={{ fontSize }}>
          {flavor} Ice Cream
        </div>
      </div>
    </div>
  );
};

export default AdDesigner;
