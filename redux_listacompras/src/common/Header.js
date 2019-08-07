import React from "react";

// Router
import { Link } from "react-router-dom";

// Material Components
import { AppBar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <div className="header">
        <Link to="/">
          <p className="title text-left">Lista de Compras</p>
        </Link>
      </div>
    </AppBar>
  );
};

export default Header;
