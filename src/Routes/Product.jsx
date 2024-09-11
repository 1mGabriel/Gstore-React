import {useContext, useEffect} from 'react'
import "./Product.css"
import { useParams, Link } from 'react-router-dom'
import { StatesContext } from "../context/Context";

const Product = () => {
    const {allProductData, setAllProductData,setCartNumber, cartNumber, getData , actualCart, setActualCart, notification, setNotification} = useContext(StatesContext);
    const {id} = useParams()
    
    // Faz a requisição
    useEffect(()=>{
        getData(`https://g-store-db-json.vercel.app/all-products/${id}`, setAllProductData)
      },[id])

      const product = {
        image: allProductData.image,
        name: allProductData.name,
        price: allProductData.price,
      }

      const addProductOnCart = ()=>{
        setCartNumber(cartNumber+1)
        setActualCart([...actualCart, product])
        setNotification(true)
        console.log(notification)
        setTimeout(()=>{
          setNotification(false)
          
        }, 4000)
       
      }
      console.log(notification)
  return (
    <div className='product-id-container'>
   <div className="img">
   <img src={allProductData.image} alt="Imagem do produto" />
   </div>
   <div className="information-product">
   <h1>{allProductData.name}</h1>
    <h2>R${allProductData.price},00</h2>
    <p>Até 10x de R${allProductData.promotion} sem juros</p>
   <div className="action-product">
   <button className='product-cart-btn' onClick={addProductOnCart}>ADICIONAR AO CARRINHO</button>
   </div>
   <div className="description">
    <p>{allProductData.description}</p>
   </div>
   </div>
    </div>
  )
}

export default Product
