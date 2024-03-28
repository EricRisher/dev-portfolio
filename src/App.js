import "./App.css";
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
