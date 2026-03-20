import { useContext, createContext, useState } from "react";

interface CartItem {
    id: number
    name: string
    price: number
    count: number
}

interface Goods {
    id: number
    name: string
    price: number
}

interface CartContextType {
    cart: CartItem[]
    totalPrice: number
    addToCart: (goods: Goods) => void
    updateQuantity: (id: number, delta: number) => void
    removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    const totalPrice = cart.reduce((sum, item) => sum + item.count * item.price, 0)

    const addToCart = (goods: Goods) => {
        const exiting = cart.find(item => item.id === goods.id)

        if (exiting) {
            setCart(prev => (
                prev.map(item => (item.id === goods.id ? { ...item, count: item.count + 1 } : item))
            ))
        } else {
            setCart(prev => [...prev, { ...goods, count: 1 }])
        }
    }
    const updateQuantity = (id: number, delta: number) => {
        setCart(prev => (
            prev.map(item => {
                if (item.id === id) {
                    const newCount = item.count + delta
                    if (newCount <= 0) {
                        return null
                    }
                    return { ...item, count: newCount }
                }
                return item
            }).filter((item): item is CartItem => item !== null) //???
        ))
    }
    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    const value = {
        cart,
        totalPrice,
        addToCart,
        updateQuantity,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('error')
    }

    return context
}