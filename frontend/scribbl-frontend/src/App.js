import React from 'react';
import logo from './logo.svg';
import './App.css';
import './resources/css/bootstrap.min.css';

import LobbyBrowser from './components/LobbyBrowser.page';
import Game from './components/Game.page';

function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
