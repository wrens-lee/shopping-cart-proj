import { useItemContext } from "./ItemContext";
import CartItem from "./CartItem";
import { Link } from "react-router";

const Cart = () => {
    const {cart, setCart} = useItemContext();

    function quantModifier(id, modifiedQuantity){
        if(modifiedQuantity <= 0){
            setCart(cart.filter((cartItem) => cartItem.id !== id));
        } else {
            setCart(cart.map((cartItem)=>(cartItem.id === id) ? {...cartItem, quantity:modifiedQuantity} : cartItem));
        }
    }

    console.log("this is cart now", cart);

    function removeFromCart(id){
        setCart(cart.filter((cartItem) => cartItem.id !== id))
    } 

    function clearCart(){
        setCart([]);
    }

    const totalPrice = cart.reduce((accumulator, item)=>{
        return accumulator + (item.price * item.quantity);
    }, 0)

    const totalItems = cart.reduce((accumulator, item)=>{
        return accumulator + item.quantity;
    }, 0)

    if(cart.length <= 0){
        return(
           <div className="cart-portion max-w-3xl mx-auto px-6 py-24 text-center">
              <h1 className="text-3xl font-bold mb-3">Your cart is empty</h1>
              <p className="mb-8">Looks like you haven't added anything yet</p>
              <Link className="inline-flex justify-center gap-2 w-50 py-3 bg-primary rounded-xl text-white font-bold" to="/shop">
                Browse Products
              </Link>
            </div>
        )
    }


    return (
      <div className="cart-portion max-w-3xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-text-secondary font-semibold mb-2">
              Cart
            </p>
            <h1 className="font-display text-4xl">
              {totalItems} {totalItems === 1 ? "item" : "items"}{" "}
            </h1>
          </div>
          <button
            className="text-sm text-text-secondary hover:text-error underline decoration-dotted underline-offset-4"
            onClick={() => clearCart()}
            hidden={cart.length <= 0}
          >
            Clear Cart
          </button>
        </div>

        <ul
          className="border border-border rounded-2xl bg-white px-6"
          hidden={cart.length === 0}
        >
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              quantModifier={quantModifier}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>

        <div className="total-portion flex items-center justify-between mt-8 pt-6 border-t border-border">
          <span className="text-text-secondary">Estimated Total</span>
          <span className="text-3xl">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    );
}

export default Cart;