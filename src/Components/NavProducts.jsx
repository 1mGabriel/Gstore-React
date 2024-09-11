import React, { useState } from "react";
import "./NavProducts.css";
import { Link } from "react-router-dom";
const NavProducts = () => {
  const [bodyClass, setBodyClass] = useState("default")
    const [xboxHide, setXboxHide] = useState(false)
    const [psnHide, setPsnHide] = useState(false)
    const [pcHide, setPcHide] = useState(false)

    const switchStateOfHide = (setState, value)=>{
        setState(value)
    }

    // pegar o elemento body:
    const root = document.querySelector("#root")
    root.classList = bodyClass
    // Mudar o class do body:
    const changeBodyClass = (classe) => {
      setBodyClass(classe)
    }
  return (
    <div className="nav-products-container">
      <div className="options-nav-products">
        <Link className="xbox-option" onMouseEnter={(e)=>switchStateOfHide(setXboxHide(true))} onMouseLeave={(e)=>switchStateOfHide(setXboxHide(false))}>
          <p>Xbox</p>
        </Link>
        <Link className="playstation-option" onMouseEnter={(e)=>switchStateOfHide(setPsnHide(true))} onMouseLeave={(e)=>switchStateOfHide(setPsnHide(false))}>
          <p>Playstation</p>
        </Link>
        <Link className="pc-option" onMouseEnter={(e)=>switchStateOfHide(setPcHide(true))} onMouseLeave={(e)=>switchStateOfHide(setPcHide(false))}>
          <p>PC</p>
        </Link>
      </div>
      <div className={!xboxHide ? ("option-nav-content-container nav-xbox hide"):("option-nav-content-container nav-xbox")}  onMouseEnter={(e)=>switchStateOfHide(setXboxHide(true))} onMouseLeave={(e)=>switchStateOfHide(setXboxHide(false))}>
        <div className="option-nav-content ">
          <Link to="/xbox/console" onClick={(e)=>changeBodyClass("root-xbox")}>
            <p>CONSOLE</p>
          </Link>
          <Link to="/xbox/jogos" onClick={(e)=>changeBodyClass("root-xbox")}>
            <p>JOGOS</p>
          </Link>
          <Link to="/xbox/perifericos" onClick={(e)=>changeBodyClass("root-xbox")}>
            <p>PERIFERICOS</p>
          </Link>
        </div>
      </div>

      <div className={!psnHide ? ("option-nav-content-container nav-playstation hide"):("option-nav-content-container nav-playstation")} onMouseEnter={(e)=>switchStateOfHide(setPsnHide(true))} onMouseLeave={(e)=>switchStateOfHide(setPsnHide(false))}>
        <div className="option-nav-content ">
          <Link to="/psn/console" onClick={(e)=>changeBodyClass("root-psn")}>
            <p>CONSOLE</p>
          </Link>
          <Link to="/psn/jogos" onClick={(e)=>changeBodyClass("root-psn")}>
            <p>JOGOS</p>
          </Link>
          <Link to="/psn/perifericos" onClick={(e)=>changeBodyClass("root-psn")}>
            <p>PERIFERICOS</p>
          </Link>
        </div>
      </div>
      
      <div className={!pcHide ? ("option-nav-content-container nav-pc hide"):("option-nav-content-container nav-pc")}  onMouseEnter={(e)=>switchStateOfHide(setPcHide(true))} onMouseLeave={(e)=>switchStateOfHide(setPcHide(false))}>
        <div className="option-nav-content ">
          <Link  to="/pc/console" onClick={(e)=>changeBodyClass("root-pc")}>
            <p>CONSOLE</p>
          </Link>
          <Link  to="/pc/jogos" onClick={(e)=>changeBodyClass("root-pc")}>
            <p>JOGOS</p>
          </Link>
          <Link  to="/pc/perifericos" onClick={(e)=>changeBodyClass("root-pc")}>
            <p>PERIFERICOS</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavProducts;
