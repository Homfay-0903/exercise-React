import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, updateQuantity, removeFromCart } = useCart()

    if (cart.length === 0) {
        return <p>no carts here</p>
    }

    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <div>
                        <span>name is:{item.name}, $ is {item.price}, totalPrice is {item.count * item.price}</span>
                    </div>
                    <div>
                        <button onClick={() => updateQuantity(item.id, -1)} disabled={item.count <= 1}>-</button>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                        <button onClick={() => removeFromCart(item.id)}>remove</button>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Cart