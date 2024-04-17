import "./Board.css"
import Square from "./Square"
const Board = ({move, changeMove}) => {
    return(
        <div className="board">
            <Square move = {move? move[0]: null} change = {() => changeMove(0)}  />
            <Square move = {move? move[1]: null} change = {() => changeMove(1)} />
            <Square move = {move? move[2]: null} change = {() => changeMove(2)}/>
            <Square move = {move? move[3]: null} change = {() => changeMove(3)}/>
            <Square move = {move? move[4]: null} change = {() => changeMove(4)}/>
            <Square move = {move? move[5]: null} change = {() => changeMove(5)}/>
            <Square move = {move? move[6]: null} change = {() => changeMove(6)}/>
            <Square move = {move? move[7]: null} change = {() => changeMove(7)}/>
            <Square move = {move? move[8]: null} change = {() => changeMove(8)}/>
            
        </div>
    )
}

export default Board;