import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import components
import Homepage from "./components/Homepage";
import About from "./components/About";
import AddPantry from "./components/AddPantry";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/add" component={AddPantry} />
    </Router>
  );
}

export default App;
