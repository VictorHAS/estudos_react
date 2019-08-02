import React from "react";
import "./App.css";

// Material Services
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

// Custom components
import Header from "./common/Header";
import Home from "./home";

// Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e91e63"
    },
    secondary: {
      main: "#00b0ff"
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Home />
    </MuiThemeProvider>
  );
};

export default App;
