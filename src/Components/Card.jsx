import ItemAmount from './ItemAmount';

const Card = ({id, image, name, price}) =>{
    return(
        <div className="item-Card" id={id}>
            <section className="item-img">
                <img src={image}/>
            </section>
            
            <div className="item-descrip">
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Card;