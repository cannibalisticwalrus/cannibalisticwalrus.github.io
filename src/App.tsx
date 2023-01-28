import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Stephen Jackiw's Resumes</div>
        <div className="main-page">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="tabs-container">
          <div className="tab">Cybersecurity</div>
          <div className="tab">Software Development</div>
          <div className="tab">Art Portfolio</div>
          <div className="tab">About</div>
          <div className="tab">Blog</div>
        </div>
      </header>
    </div>
  );
}

export default App;
