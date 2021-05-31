import { Fragment } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { From, TaskInformation, Order, Spinner } from "./components";
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <From />} />
          <Route path="/order" render={() => <Order />} />
        </Switch>
      </Router>
      <TaskInformation />
      <Spinner />
    </Fragment>
  );
}

export default App;
