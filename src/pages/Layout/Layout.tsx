import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Stephen Jackiw's Resumes</div>
        <div className="main-page">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Tabs>
          <TabList>
            <Tab>Information Technology</Tab>
            <Tab>The Arts</Tab>
            <Tab>About</Tab>
            <Tab>Blog</Tab>
          </TabList>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
