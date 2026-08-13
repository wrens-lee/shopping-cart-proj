import App from "../App";
import Home from "./Home";
import Shop from './Shop';
import Cart from './Cart';

const Routes = [
    {
        path: '/',
        element: <App/>,
        children:[
            { index: true, element: <Home/> },
            { path:'shop', element: <Shop/> },
            { path:'cart', element: <Cart/> },
        ],
    }
]

export default Routes;