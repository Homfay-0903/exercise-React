import { useCart } from "../context/CartContext";

interface Goods {
    id: number
    name: string
    price: number
}
interface GoodsListProps {
    goodsList: Goods[]
}

const GoodsList = ({ goodsList }: GoodsListProps) => {
    const { addToCart } = useCart()

    return (
        <div>
            {goodsList.map(goods => (
                <div key={goods.id}>
                    <span>name is:{goods.name}, $ is {goods.price}</span>
                    <button onClick={() => addToCart(goods)}>addToCart</button>
                </div>
            ))}
        </div>
    )
}

export default GoodsList