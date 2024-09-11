import { useEffect, useState } from 'react'
import './App.css'
// Componentes
import Navbar from './Components/Navbar'
import NavProducts from './Components/NavProducts'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { StatesContext } from "./context/Context";

function App() {
  const {menu, setMenu,cartNumber, setCartNumber, setActualCart, actualCart,notification} = useContext(StatesContext);
  const [viewCart, setViewCart] = useState(false)
  
  const totalPrice = actualCart.reduce((acc, actualCart) => acc + actualCart.price, 0)

  useEffect(()=>{

  })
  

  const removeProductOnCart = (index) =>{
    setActualCart((prevProducts) => prevProducts.filter((cart, i) => i !== index))
    setCartNumber(cartNumber - 1)
  }

  return (
    <main className="main-container">
            <div className={menu == false ? "hide" : "menu"}>
        <div className="close-menu">
          <h1 className='close-menu-btn' onClick={(e)=>setMenu(false)}>X</h1>
        </div>
        <div className={!viewCart ? "options-menu" : "hide"}>
          <div className="cart-button">
          <button onClick={(e)=>setViewCart(true)}>Carrinho</button>
          <span className={cartNumber == 0 && "hide"}>{cartNumber}</span>
          </div>
        </div>
        <div className={viewCart ? "cart-container":"hide"}>
        <div className="cart-content">
          <div className="title">
          <h1>CARRINHO</h1>
          </div>
          <div className="cart-product">          
            {actualCart.map((item, index)=>(
            <div className="product-on-cart" key={index}>
              <img src={item.image} alt="Imagem do produto" />
              <h2>{item.name}</h2>
              <h3>R${item.price}.00</h3>
              <button onClick={(e)=>removeProductOnCart(index)}>X</button>
            </div>
          ))}</div>
        </div>
        <div className="price-to-pay">
          <div className="price">
          <h2>R$ {totalPrice}.00</h2>
          </div>
          <div className="comprar">
            COMPRAR
          </div>
        </div>
        <button className='back-btn' onClick={(e)=>setViewCart(false)}>VOLTAR</button>
      </div>
      </div>
      {/* Notificação */}
      <div className={!notification ? "notification" : "notification show"}>
        <h3>Produto adicionado no carrinho</h3>
      </div>

      <section className='banner-container'>

      <nav>
        <Navbar/>
      </nav>
      </section>
      <div className="products-navbar">
        <NavProducts/>
      </div>
        <div className="outlet">
        <Outlet/>
        </div> 
      <footer>
        <p>Desenvolvido por @GabrielMPereira</p>
      </footer>
    </main>
  )
}

export default App
