const CartItem = ({item, quantModifier, removeFromCart}) => {
    const {id, image, price, title, quantity} = item;

    return(
        <li className="flex items-center gap-4 py-5 border-b border-border last:border-b-0" id={id}>
            <div className="w-16 h-16 rounded-xl bg-bg grid place-items-center shrink-0">
                <img className="max-h-12 max-w-12 object-contain mix-blend-multiply"
                    src={image}
                    alt={title}
                />
            </div>
            
            <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{title}</p>
                <p className="text-sm text-text-primary">{price.toFixed(2)} each</p>
            </div>

            <div className="inline-flex items-center border border-border rounded-full overflow-hidden bg-white">
                <button className="w-8 h-8 grid place-items-center text-text-primary hover:bg-surface-alt disabled:hover:bg-transparent transition-colors" onClick={()=>{quantModifier(id, quantity-1)}}>-</button>
                <input className="w-10 text-center text-sm font-medium bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:apperance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" name="cart-quantity" value={quantity} onChange={(e)=>{quantModifier(id, Number(e.target.value))}} min={0}/>
                <button className="w-8 h-8 grid place-items-center text-text-primary hover:bg-surface-alt disabled:hover:bg-transparent transition-colors" onClick={()=>{quantModifier(id, quantity+1)}}>+</button>
            </div>

            <p className="w-20 text-right font-semibold shrink-0">${(price * quantity).toFixed(2)}</p>
            <button aria-label={`Remove ${title}`} className="text-text-secondary/70 hover:text-error text-sm underline decoration-dotted underline-offset-4 shrink-0" onClick={()=>{removeFromCart(id)}}>Remove</button>
        </li>
    )
}

export default CartItem;