import CardProduct from "../CardProduct/CardProduct"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h2 className="font-custom text-slate-200 text-3xl text-center">{greeting}</h2>
            <div className="flex flex-wrap gap-4 p-5 justify-around ">
                <CardProduct thumbnail={'./images/socks-nike-white.jpeg'} title={'Medias Nike Blancas'} price={'1500'} />
                <CardProduct thumbnail={'./images/socks-nike-white01.jpeg'} title={'Medias Nike Blancas'} price={'1500'} />
                <CardProduct thumbnail={'./images/socks-nike-b&y.jpeg'} title={'Medias Nike Negras & Amarillo'} price={'1500'} />
                <CardProduct thumbnail={'./images/socks-nike-b&p.jpg'} title={'Medias Nike Negras & Rosado'} price={'1500'} />
                <CardProduct thumbnail={'./images/socks-jordan-b&r.jpg'} title={'Medias Jordan Rojas'} price={'1500'} />
                <CardProduct thumbnail={'./images/socks-adidas-white.jpg'} title={'Medias Adidas Blancas'} price={'1500'} />
            </div>
        </div>
    )
}

export default ItemListContainer