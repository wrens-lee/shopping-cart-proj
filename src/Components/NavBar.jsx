import { Link } from "react-router";
import { useItemContext } from "./ItemContext";

const NavBar = ()=>{
  const {cart} = useItemContext()
  const totalItems = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
    
    return (
      <header className="sticky top-0 z-20 border-b border-border backdrop-blur bg-bg">
        <nav className="flex justify-between mx-auto px-6 py-4">
          <Link className="font-bold" to="/">
            ShopCart
          </Link>

          <div className="flex items-center gap-8">
            <Link className="font-light" to="/">
              Home
            </Link>
            <Link className="font-light" to="/shop">
              Shop
            </Link>
            <Link className="font-light" to="/cart">
              <span className="inline-flex items-center gap-2">
                Cart
                <span aria-label={`${totalItems} items in cart`} 
                className="min-w-5 h-5 px-1 grid place-items-center rounded-full bg-accent text-xs font-semibold">
                  {totalItems}
                </span>
              </span>
            </Link>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;

//state in the navbar that highlights the current page they're in? 