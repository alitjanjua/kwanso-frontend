import React from "react";
// import "./App.css";
import { Router } from "react-router-dom";
import { Routes } from "./routes";
import history from "./utility";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
