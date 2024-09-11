import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import { useContext } from "react";
import { StatesContext } from "../context/Context";
import wukong from "../assets/macaco.png"
const Home = () => {
  const { homeData, setHomeData } = useContext(StatesContext);

  return (
    <div className="home-container">
      <div className="welcome-banner">
        <h2>OFERSTAS DE ESTREIA</h2>
        <h2>
          <span>CONFIRA AGORA MESMO</span>
        </h2>
        <p>validas somente antes do fim de maio</p>
      </div>
      <div className="oferts-container">
        {homeData.map((product) => (
          <div key={product.id} className="oferts-product">
            <img src={product.image} alt={`foto do ${product.name}`} />
            <div>
              <h4>{product.name}</h4>
              <h5>R$ {product.price},00</h5>
              <button>
                <Link to="">COMPRAR</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="news">
 <div className="news-content">
 <h1>Embarque na jornada ao Oeste</h1>
        <iframe
        src="https://www.youtube.com/embed/pnSsgRJmsCc"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Vídeo do YouTube"
      ></iframe>
      <p id="description-wukong">Black Myth: Wukong é um RPG de ação desenvolvido pela Game Science, inspirado no clássico romance chinês Jornada ao Oeste. No jogo, os jogadores assumem o papel de um guerreiro macaco, baseado no personagem Sun Wukong, navegando por um mundo fantástico enraizado na mitologia chinesa</p>
        <div className="wukong-container">
            <img src={wukong} alt="BlackMithWukong" />
            <h1 >Black Myth Wukong</h1>
            <h2 >R$ 359,99</h2>
            <p >A vista por R$259,99</p>
            <div className="actions">
                <button id="wukong-psn" ><Link to="/product/100">Playstation</Link></button>
                <button id="wukong-xbox" ><Link to="/product/101">Xbox</Link></button>
                <button id="wukong-pc" ><Link to="/product/102">PC</Link></button>
            </div>
        </div>
 </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
