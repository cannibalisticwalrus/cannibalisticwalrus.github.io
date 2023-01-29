import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavTabs from "./components/navTabs/NavTabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Stephen Jackiw's Resumes</div>
        <div className="main-page">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <NavTabs></NavTabs>
      </header>
    </div>
  );
}

export default App;
