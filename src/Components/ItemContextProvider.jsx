import { useEffect, useState } from "react";
import { ItemContext } from "./ItemContext";

export const ItemContextProvider = ({children}) =>{
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
      if (response.status >= 400){
        throw new Error("server error");
      }
      return response.json();
    })
    .then((data)=> setData(data))
    .catch((error)=> setError(error))
    .finally(()=> setLoading(false));
  }, []);

  return (
    <ItemContext.Provider value={{data:data, error:error, loading:loading, cart:cart, setCart:setCart}}>
      {children}
    </ItemContext.Provider>
  )
}