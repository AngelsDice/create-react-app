import React from 'react';
import ReactGA from 'react-ga';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalNav from './components/GlobalNav';
import HomePage from './containers/HomePage';

ReactGA.initialize(window.gaCode);

// const history = createMemoryHistory(location);
const App = () =>
  <Router>
    <div>
      <GlobalNav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  </Router>;

export default App;
