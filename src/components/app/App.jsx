import React from 'react';
import HeyArnoldCharacters from '../../containers/HeyArnoldChars';
import './App.css';
import DetailsPage from '../character/DetailsPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

export default function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <HeyArnoldCharacters />
          </Route>
          <Route path="/character/:id" exact={true}
            render={routerProps => (
              <DetailsPage {...routerProps} />
            )}
          />
        </Switch>
      </Router>

    </div>
  );
}
