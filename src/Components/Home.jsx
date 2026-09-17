import { Link } from "react-router";

const Home = ()=>{
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="font-bold text-3xl my-2">Welcome to ShopCart</h1>
        <p className="font-base font-sans text-stone-500 my-2">Everything you need, one click away.</p>
        <Link to='/shop'>
          <button className="mt-2 py-2 px-8 border rounded-xl border-primary bg-primary text-slate-50 font-bold">Start Shopping</button>
        </Link>
      </div>
    );
}

export default Home;