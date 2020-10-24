import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-dom";
import { db } from "../firebase";

function Homepage(props) {
  return (
    <div>
      <h1>This is the homepage</h1>
    </div>
  );
}

export default Homepage;
