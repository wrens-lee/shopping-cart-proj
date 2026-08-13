import { Link } from "react-router";

const Home = ()=>{
    return (
      <div>
        <h1>Welcome to ShopCart</h1>
        <p>Everything you need, one click away.</p>
        <Link to='/shop'>
          <button>Start Shopping</button>
        </Link>
      </div>
    );
}

export default Home;