import Parent from './components/Parent'
import { ThemeProvider } from './context/ThemeContext'
import Level1 from './components/Level1'
import TodoParent from './components/TodoParent'
import RefParent from './components/RefParent'
import { CartProvider, useCart } from './context/CartContext'
import GoodsList from './components/GoodsList'
import Cart from './components/Cart'
import LoginParent from './components/LoginParent'
import './App.css'

const TotalPriceDisplay = () => {
  const { totalPrice } = useCart()
  return (
    <div>
      <p>totalPrice is {totalPrice}</p>
    </div>
  )
}

function App() {
  const goodsData = [
    { id: 1, name: '苹果', price: 6 },
    { id: 2, name: '香蕉', price: 4 },
    { id: 3, name: '橙子', price: 5 },
  ]

  return (
    <ThemeProvider>
      <div>
        <Level1></Level1>
      </div>
      <hr />
      <div>
        <Parent></Parent>
      </div>
      <hr />
      <div>
        <TodoParent></TodoParent>
      </div>
      <hr />
      <div>
        <RefParent></RefParent>
      </div>
      <hr />
      <CartProvider>
        <div>
          <h3>supermarket</h3>
          <GoodsList goodsList={goodsData}></GoodsList>
          <Cart></Cart>
          <TotalPriceDisplay></TotalPriceDisplay>
        </div>
      </CartProvider>
      <hr />
      <LoginParent></LoginParent>
    </ThemeProvider>

  )
}

export default App
