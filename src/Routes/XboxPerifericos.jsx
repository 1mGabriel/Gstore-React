

import React, { useEffect } from 'react'
import axios from "axios"
import { useContext } from 'react'
import {Link} from "react-router-dom"
import { StatesContext } from "../context/Context";
const XboxPerifericos = () => {
    const {  getData, xboxPerifericosData, setXboxPerifericosData } = useContext(StatesContext);

    // Faz a requisição
    useEffect(()=>{
        getData("https://g-store-db-json.vercel.app/xbox-perifericos", setXboxPerifericosData )
      },[])
      


  return (
    <div className='main-products'>
    <div className="main-product-content">
        {xboxPerifericosData.map((console)=>(
            <div key={console.id} className='console xbox'>
                <img src={console.image} alt="Xobx" />
                <h2>{console.name}</h2>
                <h3 className="xbox-price">R$ {console.price}.00</h3>
                <p>até 10x de {console.promotion} sem juros</p>
                <Link to={`/product/${console.id}`}><button className="xbox-button">Comprar</button></Link>
            </div>
        ))}
    </div>
</div>
  )
}

export default XboxPerifericos
