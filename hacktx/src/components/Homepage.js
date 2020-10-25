import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-dom";
import { db } from "../firebase";
import SimpleMap from "./Map";

function Homepage(props) {
  return (
    <div>
      <h1>This is the homepage</h1>
      <SimpleMap center={{ lat: 30.23532, lng: -97.72787 }} />
    </div>
  )
}

export default Homepage;
