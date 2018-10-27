import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Items} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
