import "./Header.css"
import GameIcon from "./tic-tac-toe.png"
import Trophy from "./trophy.png"
import Equal from "./equal.png"
const Header = ({winner}) => {
    return(
        
            winner? 
            <div className="header-container">
                
                <h1 className="header">{winner === "draw"? "It's a draw": `${winner.toUpperCase()} is the winner`} </h1> 
                {winner === "draw"? <img src = {Equal} className="equal-icon" />: <img src = {Trophy} className="win-icon" />}
                
            </div>:
            <div className="header-container">
                <h1 className="header">{"Welcome to the Tic-Tac-Toe Game! Please make your move!"} </h1>
                <img src = {GameIcon} className="game-icon" />
                
            </div>
        


        
    )
}

export default Header;