import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleSelection(index) {

    if (board[index] || winner) return;

    let newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  const calculateWinner = () => {

    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[b] === board[c]) return board[a];
    }

    return null;
  }

  const winner = calculateWinner();

  function handleReset() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <h5>Next Turn: {isXNext ? "X" : "O"}</h5>

      <div className='container'>
        {
          board.map((item, index) => (
            <Button key={index} index={index} value={item} handleSelection={handleSelection} />
          ))
        }
      </div>

      {winner && <h1 className="winner">Winner is {winner}</h1>}

      <button className='reset-btn' onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
