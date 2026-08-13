import { useEffect, useState } from "react";
import useFetch from './useFetch'

const Shop = ()=>{
    const{data, error, loading} = useFetch("https://fakestoreapi.com/products")
}

export default Shop;