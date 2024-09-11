import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Componentes do ROUTER
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Context, { StatesContext } from "./context/Context.jsx";
// Componentes:
import Home from "./Routes/Home.jsx";
import XboxConsole from "./Routes/XboxConsole.jsx";
import XboxJogos from "./Routes/XboxJogos.jsx";
import XboxPerifericos from "./Routes/XboxPerifericos.jsx";
import PsnJogos from "./Routes/PsnJogos.jsx";
import PsnConsole from "./Routes/PsnConsole.jsx";
import PsnPerifericos from "./Routes/PsnPerifericos.jsx";
import PcConsole from "./Routes/PcConsole.jsx";
import PcJogos from "./Routes/PcJogos.jsx";
import PcPerifericos from "./Routes/PcPerifericos.jsx";
import Product from "./Routes/Product.jsx";

// crialção do router:
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/xbox/console",
        element: <XboxConsole/>
      },
      {
        path:"/xbox/jogos",
        element:<XboxJogos/>
      },
      {
        path:"/xbox/perifericos",
        element:<XboxPerifericos/>
      },
      {
        path:"/psn/jogos",
        element: <PsnJogos/>
      },
      {
        path:"/psn/console",
        element: <PsnConsole/>
      }
      ,
      {
        path:"/psn/perifericos",
        element: <PsnPerifericos/>
      },
      {
        path:"/pc/console",
        element:<PcConsole/>
      },
      {
        path:"/pc/jogos",
        element:<PcJogos/>
      },
      {
        path:"/pc/perifericos",
        element:<PcPerifericos/>
      },
      {
        path:"/product/:id",
        element: <Product/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
    </Context>
  </StrictMode>
);
