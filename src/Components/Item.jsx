const Item = ({data}) =>{
    return(
        <div>
            <section className="item-img">
                <img scr={data.image}/>
            </section>
            
            <div className="item-descrip">
                <p>{data.title}</p>
            </div>
        </div>
    )


}