import "./Square.css"
const Square = ({move, change}) => {
    return(
        <div className="square" onClick={change}>{move}</div>
    )
}

export default Square;