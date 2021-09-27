import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import { GlobalCSS } from './styles/globalCss';
import { ResetCSS } from './styles/resetCss';

function App() {
  return (
    <Router>
      <ResetCSS />
      <GlobalCSS />
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
