
const ItemAmount = () =>{

    return(
        <div className="amount-section">
            <button onClick={()=>{functiontoAdd}}>+</button>
            <input placeholder="0">{counter}</input>
            <button>-</button>
        </div>
    )
}

export default ItemAmount