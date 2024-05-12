import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar.jsx";
import StartUp from "./pages/StartUp/StartUp.jsx";
import Shares from "./pages/Shares/Shares.jsx";
import Identity from "./pages/Identity/Identity.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/Start-Up",
        element: <StartUp />
      }, 
      {
        path: "/Shares",
        element: <Shares />
      },
      {
        path: "/Identity",
        element: <Identity />
      }
    ]
  },
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
