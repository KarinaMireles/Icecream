import React from "react";
import Header from "./Header";
import AdDesigner from "/.public/AdDesigner";
import Votes from "./src/Votes";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
