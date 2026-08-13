import { Link } from "react-router";

const NavBar = ()=>{
    
    return(
        <nav>
            <div>
                <h1>ShopCart</h1>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
            </div>
        </nav>
    )
}

export default NavBar;