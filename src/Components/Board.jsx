import React from 'react'
import Square from './Square'

function Board({ playerX, playerO, gameStarted, setGameStarted }) {
    const [board, setBoard] = React.useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = React.useState(true)
    const [playerXScore, setPlayerXScore] = React.useState(0)
    const [playerOScore, setPlayerOScore] = React.useState(0)
    const [winner, setWinner] = React.useState(null)
    const [draw, setDraw] = React.useState(false)

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8]
        ]

        for (let logic of winnerLogic) {
            const [a, b, c] = logic
            if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
        }
        return false
    }

    const isWinner = checkWinner()

    const checkDraw = () => {
        if (board.includes(null)) {
            return false
        }
        return true
    }

    const isDraw = checkDraw();

    const handleClick = (index) => {
        if (board[index] !== null || isWinner || isDraw) {
            return
        }
        const newBoard = [...board]
        newBoard[index] = isXTurn ? 'X' : 'O'
        setBoard(newBoard)
        setIsXTurn(!isXTurn)
    }

    const handlePlayAgain = () => {
        setBoard(Array(9).fill(null))
        setWinner(null)
        setDraw(false)
    }

    React.useEffect(() => {
        if (isWinner) {
            setWinner(isWinner);
            if (isXTurn) {
                setPlayerOScore(playerOScore + 1)
            } else {
                setPlayerXScore(playerXScore + 1)
            }
            setDraw(false)
        }
        if (isDraw) {
            setDraw(true)
        }
    }, [isWinner, isDraw])


    const handleRestart = () => {
        setBoard(Array(9).fill(null))
        setPlayerXScore(0)
        setPlayerOScore(0)
        setWinner(null)
        setDraw(false)
        setGameStarted(false)
    }

    let player1 = playerX, player2 = playerO;
    if (player1 === "") {
        player1 = "X";
    }
    if (player2 === "") {
        player2 = "O";
    }

    return (
        <div className='board playersBox' style={{ display: gameStarted ? "" : "none" }}>
            <p>Score</p>
            <div className='scoreBoard'>
                <div className='score'>
                    <p>Player X : {player1}</p>
                    <p>Score : {playerXScore}</p>

                </div>
                <div className='score'>
                    <p>Player O : {player2}</p>
                    <p>Score : {playerOScore}</p>
                </div>
            </div>
            {winner ? (<>
                <div className='winner'>{winner === 'X' ? player1 : player2} is winner !!</div>
                <button className="button" onClick={handlePlayAgain}>Play Again</button>
                <button className='button' onClick={handleRestart}>Restart The Game</button>
            </>) : draw ? (<>
                <div className='winner'>Game Draw !!</div>
                <button className="button" onClick={handlePlayAgain}>Play Again</button>
                <button className='button' onClick={handleRestart}>Restart The Game</button>
            </>)
                : (
                    <>
                        <p className='turn'>{isXTurn ? player1 : player2}'s turn</p>
                        <div className='row'>
                            <Square onClick={() => handleClick(0)} value={board[0]} />
                            <Square onClick={() => handleClick(1)} value={board[1]} />
                            <Square onClick={() => handleClick(2)} value={board[2]} />
                        </div>
                        <div className='row'>
                            <Square onClick={() => handleClick(3)} value={board[3]} />
                            <Square onClick={() => handleClick(4)} value={board[4]} />
                            <Square onClick={() => handleClick(5)} value={board[5]} />
                        </div>
                        <div className='row'>
                            <Square onClick={() => handleClick(6)} value={board[6]} />
                            <Square onClick={() => handleClick(7)} value={board[7]} />
                            <Square onClick={() => handleClick(8)} value={board[8]} />
                        </div>
                    </>
                )}
        </div>

    )
}

export default Board