
import './App.css';
import Board from "./Board";
import Header from  "./Header";
import Square from "./Square";
import {useState} from "react"

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [nextMove, setNextMove] = useState("x")

  function changeSquare(index){
    if (findWinner()){
      return
    }
    const squareValues = [...squares];
    if (!squareValues[index]){
      squareValues[index] = nextMove;
      if (nextMove === "x"){
        setNextMove("o")
      }else{
        setNextMove("x")
      }
      setSquares(squareValues)
    }

    
  }

  function findWinner(){
    const winningLines = [[0,1,2], [0,3,6], [0,4,8], [1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

    for (let i = 0; i < winningLines.length; i++){
      const [a,b,c] = winningLines[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
        return squares[a]
      }
    }

    for (let i = 0; i < squares.length; i++){
      if (!squares[i]){
        return null
      }
    }
    return "draw";
  }
  return (
    <div className="App">
      <Header winner = {findWinner()}/>
      <Board move = {squares} changeMove={index => changeSquare(index)}/>
    </div>
  );
}

export default App;
