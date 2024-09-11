

import React, { useEffect } from 'react'
import axios from "axios"
import { useContext } from 'react'
import {Link} from "react-router-dom"
import { StatesContext } from "../context/Context";
const PsnJogos = () => {
    const {psnJogosData, setPsnJogosData, getData } = useContext(StatesContext);

    // Faz a requisição
    useEffect(()=>{
        getData("https://g-store-db-json.vercel.app/psn-jogos", setPsnJogosData)
      },[])


  return (
    <div className='main-products'>
    <div className="main-product-content">
        {psnJogosData.map((console)=>(
            <div key={console.id} className='console psn'>
                <img src={console.image} alt="Xobx" />
                <h2>{console.name}</h2>
                <h3 className="main-price">R$ {console.price}.00</h3>
                <p>até 10x de {console.promotion} sem juros</p>
                <Link to={`/product/${console.id}`}><button className="main-button">Comprar</button></Link>
            </div>
        ))}
    </div>
</div>
  )
}

export default PsnJogos
