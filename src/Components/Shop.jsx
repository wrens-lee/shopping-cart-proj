import { useItemContext } from "./ItemContext";
import Card from './Card';

const Shop = ()=>{
    const{data, error, loading, cart} = useItemContext();

    if(loading) return <p>Loading...</p>
    if(error) return <p>A network error was encountered</p>

    console.log('this is cart', cart)

    return (
      <div className="shop-portion grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 px-10 py-6">
        {data.map((item) => (
            <Card
              key={item.id}
              item={item}
            />
        ))}
      </div>
    );
}

export default Shop;