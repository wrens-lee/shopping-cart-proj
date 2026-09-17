import { useState } from "react"
import { useItemContext } from "./ItemContext"

const ItemQuantity = ({item}) =>{
    const {cart, setCart} = useItemContext(); 
    const [quantity, setQuantity] = useState(0);

    function quantModifier(action){
        if(action === 'add'){
            setQuantity(quantity + 1);
        } 
        if (action === 'subtract'){
            setQuantity(quantity - 1);
        }
    }
    
    function addToCart(itemToAdd){
        const isItemInCart = cart.find((cartItem) => (cartItem.id === itemToAdd.id));

        if(isItemInCart){
            setCart(cart.map((cartItem)=>(
                cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem
            )));
            setQuantity(0)
        } else {
            setCart([...cart, {...itemToAdd, quantity: quantity}]);
            setQuantity(0);
        }
    };

    return(
        <div className="amount-section mt-auto flex items-center justify-between gap-3 pt-2">
            <div className="amount-input inline-flex items-center border border-border rounded-full overflow-hidden bg-white">
                <button className="w-8 h-8 grid place-items-center text-text-primary hover:bg-surface-alt disabled:hover:bg-transparent transition-colors" onClick={()=>{quantModifier('subtract')}} disabled={quantity<=0}>-</button>
                <input className="w-10 text-center text-sm font-medium bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type='number' name="shop-quantity" value={quantity} onChange={(e)=>{setQuantity(Number(e.target.value))}} min={0} placeholder="0"/>
                <button className="w-8 h-8 grid place-items-center text-text-primary hover:bg-surface-alt transition-colors" onClick={()=>{quantModifier('add')}}>+</button>
            </div>
            <button className="text-sm font-medium text-white px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover disabled:bg-transparent disabled:border disabled:border-primary disabled:text-disabled-text whitespace-nowrap" onClick={()=>{addToCart(item)}} disabled={quantity<=0}>Add to Cart</button>
        </div>
    )
}

export default ItemQuantity;