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
      <Container style={{height: "100vh"}} className="d-flex background">
        <Row style={{width: "100%"}} className="m-1 d-flex align-self-center justify-content-center">
          <Switch>
            <Route path="/create">
              <CreateLobby/>
            </Route>

            <Route path="/lobby/:id">
              <Game/>
            </Route>

          </Switch>
        </Row>
        
      </Container>
    </Router>
  );
}

export default App;
