import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const StatesContext = createContext();

const Context = ({ children }) => {
  const [cartNumber, setCartNumber] =useState(0)
  const [menu, setMenu] = useState(false)
  const [homeData, setHomeData] = useState([]);
  const [xboxConsoleData, setXboxConsoleData] = useState([]);
  const [xboxJogosData, setXboxJogosData] = useState([]);
  const [xboxPerifericosData, setXboxPerifericosData] = useState([]);
  const [psnConsoleData, setPsnConsoleData] = useState([]);
  const [psnJogosData, setPsnJogosData] = useState([]);
  const [psnPerifericosData, setPsnPerifericosData] = useState([]);
  const [pcConsoleData, setPcConsoleData] = useState([]);
  const [pcJogosData, setPcJogosData] = useState([]);
  const [pcPerifericosData, setPcPerifericosData] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [actualCart, setActualCart] = useState([])
  const [notification, setNotification] = useState(false)

  // Requisição do banco de dados:
  const getData = async (url, action) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      action(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData("https://g-store-db-json.vercel.app/home", setHomeData);
  }, []);
  return (
    <div>
      <StatesContext.Provider
        value={{
          homeData,
          setHomeData,
          getData,
          xboxConsoleData,
          setXboxConsoleData,
          xboxJogosData,
          setXboxJogosData,
          xboxPerifericosData,
          setXboxPerifericosData,
          psnConsoleData,
          setPsnConsoleData,
          psnJogosData,
          setPsnJogosData,
          psnPerifericosData,
          setPsnPerifericosData,
          pcConsoleData,
          setPcConsoleData,
          pcJogosData,
          setPcJogosData,
          pcPerifericosData,
          setPcPerifericosData,
          allProductData,
          setAllProductData,
          menu, setMenu,
          cartNumber, setCartNumber,
          notification, setNotification,
          actualCart, setActualCart
        }}
      >
        {children}
      </StatesContext.Provider>
    </div>
  );
};

export default Context;
