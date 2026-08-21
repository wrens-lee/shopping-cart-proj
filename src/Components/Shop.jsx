import { useEffect, useState } from "react";
import ItemContex from './ItemContex';
import Card from './Card';

const Shop = ()=>{
    const{data, error, loading} = useFetch("https://fakestoreapi.com/products")

    if(loading) return <p>Loading...</p>
    if(error) return <p>A network error was encountered</p>
    
    return (
      <div className="shop-portion">
        {data.map((item) => (
          <>
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.title}
              price={item.price}
            />
            <component></component>
          </>
        ))}
      </div>
    );
}

export default Shop;