import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './App.css';
import './resources/css/bootstrap.min.css';

import LobbyBrowser from './components/LobbyBrowser.page';
import Game from './components/Game.page';

function App() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id">
            <Game/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
