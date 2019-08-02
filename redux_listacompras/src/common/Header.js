import React from "react";

// Material Components
import { AppBar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <div className="header">
        <p className="title">Lista de Compras</p>
      </div>
    </AppBar>
  );
};

export default Header;
