import ItemQuantity from './ItemQuantity';

const Card = ({item}) =>{
    const {id, image, title, price} = item;

    return (
      <div
        className="item-Card group flex flex-col border border-border rounded-3xl bg-white overflow-hidden w-full"
        id={id}
      >
        <section className="item-img h-64 bg-surface flex justify-center items-center p-6">
          <img
            className="h-40 w-auto object-contain duration-300 group-hover:scale-105"
            src={image}
          />
        </section>

        <div className="item-descrip flex flex-col flex-1 p-5 gap-3">
          <p className="text-lg leading-snug line-clamp-2 min-h-[3.4rem]">
            {title}
          </p>
          <p className="text-text-primary font-semibold">${price.toFixed(2)}</p>
          <ItemQuantity item={item} />
        </div>
      </div>
    );
}

export default Card;