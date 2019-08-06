import React from "react";
import "./App.css";

// Redux && Store
import { Provider } from "react-redux";
import store from "./store";

// Material Services
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

// Routes
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Custom components
import Header from "./common/Header";
import Home from "./home";
import CreateList from "./createList";

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
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/lista/:action" component={CreateList} />
            </Switch>
          </>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
