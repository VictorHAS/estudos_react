import React from "react";

// Custom Components
import NewList from "./NewList";
import List from "./List";

// Css
import "./Home.css";

const Home = props => (
  <div className="page-container">
    <NewList />
    <List />
  </div>
);

export default Home;
