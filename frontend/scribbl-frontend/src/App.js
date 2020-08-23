import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

import './App.css';
import './resources/css/bootstrap.min.css';

import Game from './components/Game.page';
import CreateLobby from './components/CreateLobby.page';

function App() {
  return (
    <Router>
    {/* <Link to="/modus-create">Modus Create</Link> */}
      <Container className="background">
        <Switch>
          <Route path="/joinLobby/id">
            <Game/>
          </Route>

          <Route path="/create">
            <CreateLobby/>
          </Route>

          <Route path="/lobby/:id">
            <Game/>
          </Route>

        </Switch>
      </Container>
    </Router>
  );
}

export default App;
