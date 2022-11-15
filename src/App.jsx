import Players from './Components/Players';
import './App.css';
import React from 'react';
import Board from './Components/Board';

function App() {
  const [playerX, setPlayerX] = React.useState("");
  const [playerO, setPlayerO] = React.useState("");
  const [gameStarted, setGameStarted] = React.useState(false);


  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0", fontSize: "45px" }}>Tic-Tac-Toe</h1>
      <div className="container">
        <Players playerX={playerX} setPlayerX={setPlayerX} playerO={playerO} setPlayerO={setPlayerO} gameStarted={gameStarted} setGameStarted={setGameStarted} />
        <Board playerX={playerX} playerO={playerO} gameStarted={gameStarted} setGameStarted={setGameStarted} />
      </div>
    </div>
  );
}

export default App;
