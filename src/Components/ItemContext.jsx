import { useEffect, useState, createContext } from "react";

export const ItemContext = createContext();

export const ItemContextValue = ({children}) =>{
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <ItemContext.Provider value={{data:data, error:error, loading:loading}}>
      {children}
    </ItemContext.Provider>
  )
}







// import { useEffect, useState, createContext } from "react";

// export const ItemContext = createContext();

// const useFetch = () =>{
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading
//         fetch("https://fakestoreapi.com/products")
//           .then((response) => {
//             if (response.status >= 400) {
//               throw new Error("server error");
//             }
//             return response.json();
//           })
//           .then((data) => setData(data))
//           .catch((error) => setError(error))
//           .finally(() => setLoading(false));
//         }, []);
    
//     return {data, error, loading}
// }

// export default useFetch;