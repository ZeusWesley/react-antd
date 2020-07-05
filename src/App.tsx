import React from "react";
import { Router, Switch } from "react-router";
import AppRoute from "./router/AppRoute";
import { createBrowserHistory } from "history";
import "./App.css";

// PAGES
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import notFound from "./pages/404/404";

// COMPONENTS
import MainLayout from "./components/MainLayout";

// ANT DESIGN
import "antd/dist/antd.css";
import PrivateRoute from "./router/PrivateRoute";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <AppRoute exact path="/login" component={Login} layout={MainLayout} />
        <PrivateRoute exact path="/" component={Home} layout={MainLayout} />
        <AppRoute component={notFound} layout={MainLayout} />
      </Switch>
    </Router>
  );
}

export default App;
