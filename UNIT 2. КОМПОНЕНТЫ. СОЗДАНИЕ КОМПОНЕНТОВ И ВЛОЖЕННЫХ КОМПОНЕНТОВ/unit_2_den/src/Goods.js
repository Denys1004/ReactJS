function Goods(props){
    return(
        <div className="goods-block">
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <img src={props.image} alt={props.title}/>
        </div>
    )
}

export default Goods;