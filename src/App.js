import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Info from "./component/Info";
import { ConfigContext as Provider } from "./config/config";
import "tachyons";

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <Router>
            <Switch>
              <Route path="/" component={Header} exact />
              <Route path="/info" component={Info} exact />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
