import React from "react";
// import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Routes } from "./routes";

const history = createBrowserHistory();

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
