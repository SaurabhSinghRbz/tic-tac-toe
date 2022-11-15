import React from 'react'

function Players({ playerX, setPlayerX, playerO, setPlayerO, gameStarted, setGameStarted }) {
    return (
        <div className='playersBox' style={{ display: gameStarted ? "none" : "" }}>
            <p className='playerName'>Player X Name</p>
            <input type='text' placeholder='Enter Player X Name' value={playerX} onChange={(e) => setPlayerX(e.target.value)} />
            <p className='playerName'>Player O Name</p>
            <input type='text' placeholder='Enter Player O Name' value={playerO} onChange={(e) => setPlayerO(e.target.value)} />
            <button className='button' onClick={() => setGameStarted(true)}>Start</button>
        </div>
    )
}

export default Players